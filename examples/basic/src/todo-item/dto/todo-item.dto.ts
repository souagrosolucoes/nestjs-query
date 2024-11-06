import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { CursorConnection, FilterableField, UnPagedRelation } from '@souagrosolucoes/nestjs-query-graphql'

import { SubTaskDTO } from '../../sub-task/dto/sub-task.dto'
import { TagDTO } from '../../tag/dto/tag.dto'

@ObjectType('TodoItem')
@CursorConnection('subTasks', () => SubTaskDTO, {
  update: { enabled: true }
})
@CursorConnection('tags', () => TagDTO, {
  update: { enabled: true },
  remove: { enabled: true }
})
@UnPagedRelation('allSubTasks', () => SubTaskDTO, {
  relationName: 'subTasks',
  update: { enabled: true },
  remove: { enabled: true }
})
export class TodoItemDTO {
  @FilterableField(() => ID)
  id!: number

  @FilterableField()
  title!: string

  @FilterableField({ nullable: true })
  description?: string

  @FilterableField({
    name: 'isCompleted'
  })
  completed!: boolean

  @FilterableField(() => GraphQLISODateTime, { filterOnly: true })
  created!: Date

  @FilterableField(() => GraphQLISODateTime, { filterOnly: true })
  updated!: Date
}
