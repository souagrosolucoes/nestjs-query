/* eslint-disable @typescript-eslint/naming-convention */
import { SequelizeModule } from '@nestjs/sequelize'
import { Test, TestingModule } from '@nestjs/testing'
import { AggregateQuery } from '@souagrosolucoes/nestjs-query-core'
import sequelize, { Projectable } from 'sequelize'
import { Sequelize } from 'sequelize-typescript'

import { AggregateBuilder } from '../../src/query'
import { CONNECTION_OPTIONS } from '../__fixtures__/sequelize.fixture'
import { TestEntity } from '../__fixtures__/test.entity'
import { TestEntityTestRelationEntity } from '../__fixtures__/test-entity-test-relation.entity'
import { TestRelation } from '../__fixtures__/test-relation.entity'

describe('AggregateBuilder', (): void => {
  let moduleRef: TestingModule
  const createAggregateBuilder = () => new AggregateBuilder<TestEntity>(TestEntity)

  const expectAggregateQuery = (agg: AggregateQuery<TestEntity>, expected: Projectable): void => {
    const actual = createAggregateBuilder().build(agg)
    expect(actual).toEqual(expected)
  }

  afterEach(() => moduleRef.get(Sequelize).close())

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRoot(CONNECTION_OPTIONS),
        SequelizeModule.forFeature([TestEntity, TestRelation, TestEntityTestRelationEntity])
      ]
    }).compile()
    await moduleRef.get(Sequelize).sync()
  })

  it('should throw an error if no selects are generated', (): void => {
    expect(() => createAggregateBuilder().build({})).toThrow('No aggregate fields found.')
  })

  it('should create selects for all aggregate functions', (): void => {
    expectAggregateQuery(
      {
        count: [
          { field: 'testEntityPk', args: {} },
          { field: 'stringType', args: {} }
        ],
        avg: [{ field: 'numberType', args: {} }],
        sum: [{ field: 'numberType', args: {} }],
        max: [
          { field: 'stringType', args: {} },
          { field: 'dateType', args: {} },
          { field: 'numberType', args: {} }
        ],
        min: [
          { field: 'stringType', args: {} },
          { field: 'dateType', args: {} },
          { field: 'numberType', args: {} }
        ]
      },
      {
        attributes: [
          [sequelize.fn('COUNT', sequelize.col('test_entity_pk')), 'COUNT_testEntityPk'],
          [sequelize.fn('COUNT', sequelize.col('string_type')), 'COUNT_stringType'],
          [sequelize.fn('SUM', sequelize.col('number_type')), 'SUM_numberType'],
          [sequelize.fn('AVG', sequelize.col('number_type')), 'AVG_numberType'],
          [sequelize.fn('MAX', sequelize.col('string_type')), 'MAX_stringType'],
          [sequelize.fn('MAX', sequelize.col('date_type')), 'MAX_dateType'],
          [sequelize.fn('MAX', sequelize.col('number_type')), 'MAX_numberType'],
          [sequelize.fn('MIN', sequelize.col('string_type')), 'MIN_stringType'],
          [sequelize.fn('MIN', sequelize.col('date_type')), 'MIN_dateType'],
          [sequelize.fn('MIN', sequelize.col('number_type')), 'MIN_numberType']
        ]
      }
    )
  })

  it('should create selects for all aggregate functions and group bys', (): void => {
    expectAggregateQuery(
      {
        groupBy: [
          { field: 'stringType', args: {} },
          { field: 'boolType', args: {} }
        ],
        count: [{ field: 'testEntityPk', args: {} }]
      },
      {
        attributes: [
          [sequelize.col('string_type'), 'GROUP_BY_stringType'],
          [sequelize.col('bool_type'), 'GROUP_BY_boolType'],
          [sequelize.fn('COUNT', sequelize.col('test_entity_pk')), 'COUNT_testEntityPk']
        ]
      }
    )
  })

  describe('.convertToAggregateResponse', () => {
    it('should convert a flat response into an Aggregate response', () => {
      const dbResult = [
        {
          GROUP_BY_stringType: 'z',
          COUNT_testEntityPk: 10,
          SUM_numberType: 55,
          AVG_numberType: 5,
          MAX_stringType: 'z',
          MAX_numberType: 10,
          MIN_stringType: 'a',
          MIN_numberType: 1
        }
      ]
      expect(AggregateBuilder.convertToAggregateResponse<TestEntity>(dbResult)).toEqual([
        {
          groupBy: { stringType: 'z' },
          count: { testEntityPk: 10 },
          sum: { numberType: 55 },
          avg: { numberType: 5 },
          max: { stringType: 'z', numberType: 10 },
          min: { stringType: 'a', numberType: 1 }
        }
      ])
    })

    it('should throw an error if a column is not expected', () => {
      const dbResult = [
        {
          COUNTtestEntityPk: 10
        }
      ]
      expect(() => AggregateBuilder.convertToAggregateResponse<TestEntity>(dbResult)).toThrow(
        'Unknown aggregate column encountered.'
      )
    })
  })
})
