import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { CursorConnection, FilterableField, QueryOptions } from '@souagrosolucoes/nestjs-query-graphql'

import { SubTaskDTO } from '../../sub-task/dto/sub-task.dto'
import { TagDTO } from '../../tag/dto/tag.dto'

@ObjectType('TodoItem')
@QueryOptions({ enableTotalCount: true })
@CursorConnection('subTasks', () => SubTaskDTO, {
  complexity: 5,
  update: { enabled: true }
})
@CursorConnection('tags', () => TagDTO, {
  complexity: 10,
  update: { enabled: true },
  remove: { enabled: true }
})
export class TodoItemDTO {
  @FilterableField(() => ID, { complexity: 1 })
  id!: number

  @FilterableField({ complexity: 1 })
  title!: string

  @FilterableField({ nullable: true, complexity: 1 })
  description?: string

  @FilterableField({ complexity: 1 })
  completed!: boolean

  @FilterableField(() => GraphQLISODateTime, { complexity: 1 })
  created!: Date

  @FilterableField(() => GraphQLISODateTime, { complexity: 1 })
  updated!: Date
}
