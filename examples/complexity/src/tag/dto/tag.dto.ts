import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { CursorConnection, FilterableField, QueryOptions } from '@souagrosolucoes/nestjs-query-graphql'

import { TodoItemDTO } from '../../todo-item/dto/todo-item.dto'

@ObjectType('Tag')
@QueryOptions({ enableTotalCount: true })
@CursorConnection('todoItems', () => TodoItemDTO, {
  update: { enabled: true },
  remove: { enabled: true },
  complexity: 10
})
export class TagDTO {
  @FilterableField(() => ID, { complexity: 1 })
  id!: number

  @FilterableField({ complexity: 1 })
  name!: string

  @FilterableField(() => GraphQLISODateTime, { complexity: 1 })
  created!: Date

  @FilterableField(() => GraphQLISODateTime, { complexity: 1 })
  updated!: Date
}
