/* eslint-disable no-param-reassign */
import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import {
  BeforeCreateMany,
  BeforeCreateOne,
  BeforeUpdateMany,
  BeforeUpdateOne,
  CreateManyInputType,
  CreateOneInputType,
  FilterableCursorConnection,
  FilterableField,
  QueryOptions,
  UpdateManyInputType,
  UpdateOneInputType
} from '@souagrosolucoes/nestjs-query-graphql'

import { UserContext } from '../../auth/auth.interfaces'
import { TodoItemDTO } from '../../todo-item/dto/todo-item.dto'

@ObjectType('Tag')
@QueryOptions({ enableTotalCount: true })
@FilterableCursorConnection('todoItems', () => TodoItemDTO, {
  update: { enabled: true },
  remove: { enabled: true }
})
@BeforeCreateOne((input: CreateOneInputType<TagDTO>, context: UserContext) => {
  input.input.createdBy = context.req.user.username
  return input
})
@BeforeCreateMany((input: CreateManyInputType<TagDTO>, context: UserContext) => {
  const createdBy = context.req.user.username
  input.input = input.input.map((c) => ({ ...c, createdBy }))
  return input
})
@BeforeUpdateOne((input: UpdateOneInputType<TagDTO>, context: UserContext) => {
  input.update.updatedBy = context.req.user.username
  return input
})
@BeforeUpdateMany((input: UpdateManyInputType<TagDTO, TagDTO>, context: UserContext) => {
  input.update.updatedBy = context.req.user.username
  return input
})
export class TagDTO {
  @FilterableField(() => ID)
  id!: number

  @FilterableField()
  name!: string

  @FilterableField(() => GraphQLISODateTime)
  created!: Date

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date

  @FilterableField({ nullable: true })
  createdBy?: string

  @FilterableField({ nullable: true })
  updatedBy?: string
}
