import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { CursorConnection, FilterableField, KeySet, ObjectId, QueryOptions } from '@souagrosolucoes/nestjs-query-graphql'
import mongoose from 'mongoose'

import { AuthGuard } from '../../auth.guard'
import { SubTaskDTO } from '../../sub-task/dto/sub-task.dto'
import { TagDTO } from '../../tag/dto/tag.dto'

@ObjectType('TodoItem')
@KeySet(['id'])
@QueryOptions({ enableTotalCount: true })
@CursorConnection('subTasks', () => SubTaskDTO, {
  update: { enabled: true },
  guards: [AuthGuard]
})
@CursorConnection('tags', () => TagDTO, {
  update: { enabled: true },
  remove: { enabled: true },
  guards: [AuthGuard]
})
export class TodoItemDTO {
  @ObjectId()
  _id: mongoose.Types.ObjectId

  @FilterableField(() => ID)
  id!: string

  @FilterableField()
  title!: string

  @FilterableField({ nullable: true })
  description?: string

  @FilterableField()
  completed!: boolean

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date

  @Field()
  age!: number

  @FilterableField()
  priority!: number

  @FilterableField({ nullable: true })
  createdBy?: string

  @FilterableField({ nullable: true })
  updatedBy?: string
}
