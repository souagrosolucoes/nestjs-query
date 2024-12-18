import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { FilterableField, OffsetConnection, PagingStrategies, QueryOptions } from '@souagrosolucoes/nestjs-query-graphql'

import { TodoItemDTO } from '../../todo-item/dto/todo-item.dto'

@ObjectType('Tag')
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET, enableTotalCount: true })
@OffsetConnection('todoItems', () => TodoItemDTO, {
  update: { enabled: true },
  remove: { enabled: true }
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
}
