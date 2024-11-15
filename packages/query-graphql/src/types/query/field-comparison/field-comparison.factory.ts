import {
  Field,
  Float,
  GraphQLISODateTime,
  GraphQLTimestamp,
  ID,
  InputType,
  Int,
  ReturnTypeFunc,
  ReturnTypeFuncValue
} from '@nestjs/graphql'
import { Class, FilterComparisonOperators, FilterFieldComparison, isNamed } from '@souagrosolucoes/nestjs-query-core'
import { Type } from 'class-transformer'
import { IsBoolean, IsDate, IsInt, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { upperCaseFirst } from 'upper-case-first'

import { getGraphqlEnumMetadata } from '../../../common'
import { composeDecorators, SkipIf } from '../../../decorators'
import { IsUndefined } from '../../validators'
import { isInAllowedList } from '../helpers'
import { getOrCreateBooleanFieldComparison } from './boolean-field-comparison.type'
import { getOrCreateDateFieldComparison } from './date-field-comparison.type'
import { getOrCreateFloatFieldComparison } from './float-field-comparison.type'
import { getOrCreateIntFieldComparison } from './int-field-comparison.type'
import { getOrCreateNumberFieldComparison } from './number-field-comparison.type'
import { getOrCreateStringFieldComparison } from './string-field-comparison.type'
import { getOrCreateTimestampFieldComparison } from './timestamp-field-comparison.type'

/** @internal */
const filterComparisonMap = new Map<string, () => Class<FilterFieldComparison<unknown>>>()
filterComparisonMap.set('StringFilterComparison', getOrCreateStringFieldComparison)
filterComparisonMap.set('NumberFilterComparison', getOrCreateNumberFieldComparison)
filterComparisonMap.set('IntFilterComparison', getOrCreateIntFieldComparison)
filterComparisonMap.set('FloatFilterComparison', getOrCreateFloatFieldComparison)
filterComparisonMap.set('BooleanFilterComparison', getOrCreateBooleanFieldComparison)
filterComparisonMap.set('DateFilterComparison', getOrCreateDateFieldComparison)
filterComparisonMap.set('DateTimeFilterComparison', getOrCreateDateFieldComparison)
filterComparisonMap.set('TimestampFilterComparison', getOrCreateTimestampFieldComparison)

const knownTypes: Set<ReturnTypeFuncValue> = new Set([
  String,
  Number,
  Boolean,
  Int,
  Float,
  ID,
  Date,
  GraphQLISODateTime,
  GraphQLTimestamp
])

const allowedBetweenTypes: Set<ReturnTypeFuncValue> = new Set([Number, Int, Float, Date, GraphQLISODateTime, GraphQLTimestamp])
const betweenFilterValidationMap: Map<ReturnTypeFuncValue, PropertyDecorator> = new Map()
betweenFilterValidationMap.set(Number, IsNumber())
betweenFilterValidationMap.set(Float, IsNumber())
betweenFilterValidationMap.set(Int, IsInt())
betweenFilterValidationMap.set(Date, IsDate())
betweenFilterValidationMap.set(GraphQLISODateTime, IsDate())
betweenFilterValidationMap.set(GraphQLTimestamp, IsDate())

/** @internal */
const getTypeName = (SomeType: ReturnTypeFuncValue): string => {
  if (knownTypes.has(SomeType) || isNamed(SomeType)) {
    const typeName = (SomeType as { name: string }).name
    return upperCaseFirst(typeName)
  }
  if (typeof SomeType === 'object') {
    const enumType = getGraphqlEnumMetadata(SomeType)
    if (enumType) {
      return upperCaseFirst(enumType.name)
    }
  }
  throw new Error(`Unable to create filter comparison for ${JSON.stringify(SomeType)}.`)
}

const isCustomFieldComparison = <T>(options: FilterComparisonOptions<T>): boolean =>
  !!options.allowedComparisons || !!options.decorators

const getComparisonTypeName = <T>(fieldType: ReturnTypeFuncValue, options: FilterComparisonOptions<T>): string => {
  if (options.overrideTypeNamePrefix) {
    return `${options.overrideTypeNamePrefix}FilterComparison`
  }
  if (isCustomFieldComparison(options)) {
    return `${upperCaseFirst(options.fieldName)}FilterComparison`
  }
  return `${getTypeName(fieldType)}FilterComparison`
}

type FilterComparisonOptions<T> = {
  FieldType: Class<T>
  fieldName: string
  allowedComparisons?: FilterComparisonOperators<T>[]
  returnTypeFunc?: ReturnTypeFunc<ReturnTypeFuncValue>
  decorators?: PropertyDecorator[]
  overrideTypeNamePrefix?: string
}

/** @internal */
export function createFilterComparisonType<T>(options: FilterComparisonOptions<T>): Class<FilterFieldComparison<T>> {
  const { FieldType, returnTypeFunc, decorators = [] } = options
  const fieldType = returnTypeFunc ? returnTypeFunc() : FieldType
  const inputName = getComparisonTypeName(fieldType, options)
  const generator = filterComparisonMap.get(inputName)
  const CustomDecorator = () => composeDecorators(...decorators)

  if (generator) {
    return generator() as Class<FilterFieldComparison<T>>
  }

  const isNotAllowed = (val: FilterComparisonOperators<unknown>, mustBeType?: Set<ReturnTypeFuncValue>) => () => {
    const comparisonAllowed = isInAllowedList(options.allowedComparisons, val as unknown)

    if (comparisonAllowed) {
      return mustBeType && !mustBeType.has(fieldType)
    }

    return true
  }

  const BetweenFieldValidator = () => composeDecorators(...[betweenFilterValidationMap.get(fieldType)].filter(Boolean))

  @InputType(`${inputName}Between`)
  class FcBetween {
    @Field(() => fieldType, { nullable: false })
    @BetweenFieldValidator()
    lower!: T

    @Field(() => fieldType, { nullable: false })
    @BetweenFieldValidator()
    upper!: T
  }

  @InputType(inputName)
  class Fc {
    @SkipIf(isNotAllowed('is'), Field(() => Boolean, { nullable: true }))
    @IsBoolean()
    @IsOptional()
    is?: boolean | null

    @SkipIf(isNotAllowed('isNot'), Field(() => Boolean, { nullable: true }))
    @IsBoolean()
    @IsOptional()
    isNot?: boolean | null

    @SkipIf(isNotAllowed('eq'), Field(() => fieldType, { nullable: true }))
    @IsUndefined()
    @Type(() => FieldType)
    @CustomDecorator()
    eq?: T

    @SkipIf(isNotAllowed('neq'), Field(() => fieldType, { nullable: true }))
    @IsUndefined()
    @Type(() => FieldType)
    @CustomDecorator()
    neq?: T

    @SkipIf(isNotAllowed('gt'), Field(() => fieldType, { nullable: true }))
    @IsUndefined()
    @Type(() => FieldType)
    @CustomDecorator()
    gt?: T

    @SkipIf(isNotAllowed('gte'), Field(() => fieldType, { nullable: true }))
    @IsUndefined()
    @Type(() => FieldType)
    @CustomDecorator()
    gte?: T

    @SkipIf(isNotAllowed('lt'), Field(() => fieldType, { nullable: true }))
    @IsUndefined()
    @Type(() => FieldType)
    @CustomDecorator()
    lt?: T

    @SkipIf(isNotAllowed('lte'), Field(() => fieldType, { nullable: true }))
    @IsUndefined()
    @Type(() => FieldType)
    @CustomDecorator()
    lte?: T

    @SkipIf(isNotAllowed('like'), Field(() => fieldType, { nullable: true }))
    @IsUndefined()
    @Type(() => FieldType)
    @CustomDecorator()
    like?: T

    @SkipIf(isNotAllowed('notLike'), Field(() => fieldType, { nullable: true }))
    @IsUndefined()
    @Type(() => FieldType)
    @CustomDecorator()
    notLike?: T

    @SkipIf(isNotAllowed('contains'), Field(() => fieldType, { nullable: true }))
    @IsUndefined()
    @Type(() => FieldType)
    @CustomDecorator()
    contains?: T

    @SkipIf(isNotAllowed('iLike'), Field(() => fieldType, { nullable: true }))
    @IsUndefined()
    @Type(() => FieldType)
    @CustomDecorator()
    iLike?: T

    @SkipIf(isNotAllowed('notILike'), Field(() => fieldType, { nullable: true }))
    @IsUndefined()
    @Type(() => FieldType)
    @CustomDecorator()
    notILike?: T;

    @SkipIf(isNotAllowed('in'), Field(() => [fieldType], { nullable: true }))
    @IsUndefined()
    @Type(() => FieldType)
    @CustomDecorator()
    in?: T[]

    @SkipIf(isNotAllowed('notIn'), Field(() => [fieldType], { nullable: true }))
    @IsUndefined()
    @Type(() => FieldType)
    @CustomDecorator()
    notIn?: T[]

    @SkipIf(isNotAllowed('between', allowedBetweenTypes), Field(() => FcBetween, { nullable: true }))
    @ValidateNested()
    @Type(() => FcBetween)
    between?: T

    @SkipIf(isNotAllowed('notBetween', allowedBetweenTypes), Field(() => FcBetween, { nullable: true }))
    @ValidateNested()
    @Type(() => FcBetween)
    notBetween?: T
  }

  filterComparisonMap.set(inputName, () => Fc)
  return Fc as Class<FilterFieldComparison<T>>
}
