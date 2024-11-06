import { Directive, Field, Int, ObjectType } from '@nestjs/graphql'
import { Class, UpdateManyResponse } from '@souagrosolucoes/nestjs-query-core'

/** @internal */
let updateManyResponseType: Class<UpdateManyResponse> | null = null

export const UpdateManyResponseType = (): Class<UpdateManyResponse> => {
  if (updateManyResponseType) {
    return updateManyResponseType
  }

  @Directive('@shareable')
  @ObjectType('UpdateManyResponse')
  class UpdateManyResponseTypeImpl implements UpdateManyResponse {
    @Field(() => Int, { description: 'The number of records updated.' })
    updatedCount!: number
  }

  updateManyResponseType = UpdateManyResponseTypeImpl
  return updateManyResponseType
}
