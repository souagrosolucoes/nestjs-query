import { BadRequestException } from '@nestjs/common'
import { AggregateQuery, AggregateQueryField, AggregateResponse } from '@souagrosolucoes/nestjs-query-core'
import { camelCase } from 'camel-case'
import { Document } from 'mongoose'

import { getSchemaKey } from './helpers'

enum AggregateFuncs {
  AVG = 'avg',
  SUM = 'sum',
  COUNT = 'count',
  MAX = 'max',
  MIN = 'min'
}

type Aggregate = Record<string, Record<string, unknown>>
type Group = { _id: Record<string, string> | null }
export type MongooseGroupAndAggregate = Aggregate & Group

const AGG_REGEXP = /(avg|sum|count|max|min|group_by)_(.*)/

/**
 * @internal
 * Builds a WHERE clause from a Filter.
 */
export class AggregateBuilder<Entity extends Document> {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  static convertToAggregateResponse<Entity>(aggregates: Record<string, unknown>[]): AggregateResponse<Entity>[] {
    return aggregates.map(({ _id, ...response }) => {
      return { ...this.extractResponse(_id as Record<string, unknown>), ...this.extractResponse(response) }
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  private static extractResponse<Entity>(response?: Record<string, unknown>): AggregateResponse<Entity> {
    if (!response) {
      return {}
    }
    return Object.keys(response).reduce((agg, resultField: string) => {
      const matchResult = AGG_REGEXP.exec(resultField)
      if (!matchResult) {
        throw new Error('Unknown aggregate column encountered.')
      }
      const [matchedFunc, matchedFieldName] = matchResult.slice(1)
      const aggFunc = camelCase(matchedFunc.toLowerCase()) as keyof AggregateResponse<Entity>
      const fieldName = matchedFieldName as keyof Entity
      const aggResult = agg[aggFunc] || {}
      return {
        ...agg,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        [aggFunc]: { ...aggResult, [fieldName]: response[resultField] }
      }
    }, {} as AggregateResponse<Entity>)
  }

  /**
   * Builds a aggregate SELECT clause from a aggregate.
   * @param aggregate - the aggregates to select.
   */
  public build(aggregate: AggregateQuery<Entity>): MongooseGroupAndAggregate {
    const aggSelect: Aggregate = {
      ...this.createAggSelect(AggregateFuncs.COUNT, aggregate.count),
      ...this.createAggSelect(AggregateFuncs.SUM, aggregate.sum),
      ...this.createAggSelect(AggregateFuncs.AVG, aggregate.avg),
      ...this.createAggSelect(AggregateFuncs.MAX, aggregate.max),
      ...this.createAggSelect(AggregateFuncs.MIN, aggregate.min)
    }
    if (!Object.keys(aggSelect).length) {
      throw new BadRequestException('No aggregate fields found.')
    }

    return {
      ...aggSelect,
      _id: this.createGroupBySelect(aggregate.groupBy)
    }
  }

  private createAggSelect(func: AggregateFuncs, fields?: AggregateQueryField<Entity>[]): Aggregate {
    if (!fields) {
      return {}
    }

    return fields.reduce((agg: Aggregate, { field }) => {
      const aggAlias = `${func}_${field as string}`
      const fieldAlias = `$${getSchemaKey(String(field))}`
      if (func === AggregateFuncs.COUNT) {
        return {
          ...agg,
          [aggAlias]: {
            $sum: {
              $cond: {
                if: { $in: [{ $type: fieldAlias }, ['missing', 'null']] },
                then: 0,
                else: 1
              }
            }
          }
        }
      }
      return { ...agg, [aggAlias]: { [`$${func}`]: fieldAlias } }
    }, {})
  }

  private createGroupBySelect(aggregatedFields?: AggregateQueryField<Entity>[]): Record<string, string> | null {
    if (!aggregatedFields) {
      return null
    }

    return aggregatedFields.reduce((id: Record<string, string>, aggregatedField) => {
      const aggAlias = this.getGroupByAlias(aggregatedField)
      const fieldAlias = `$${getSchemaKey(String(aggregatedField.field))}`
      return { ...id, [aggAlias]: fieldAlias }
    }, {})
  }

  public getGroupBySelects(aggregatedFields?: AggregateQueryField<Entity>[]): string[] | undefined {
    if (!aggregatedFields) {
      return undefined
    }
    // append _id so it pulls the sort from the _id field
    return (aggregatedFields ?? []).map((aggregatedField) => `_id.${this.getGroupByAlias(aggregatedField)}`)
  }

  private getGroupByAlias({ field }: AggregateQueryField<Entity>): string {
    return `group_by_${field as string}`
  }
}
