import { UnauthorizedException } from '@nestjs/common'
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import {
  AuthorizationContext,
  Authorize,
  FilterableCursorConnection,
  FilterableField,
  OperationGroup,
  QueryOptions,
  Relation
} from '@souagrosolucoes/nestjs-query-graphql'

import { UserContext } from '../../auth/auth.interfaces'
import { SubTaskDTO } from '../../sub-task/dto/sub-task.dto'
import { TagDTO } from '../../tag/dto/tag.dto'
import { UserDTO } from '../../user/user.dto'

@ObjectType('TodoItem')
@QueryOptions({ enableTotalCount: true })
@Authorize({
  authorize: (context: UserContext, authorizationContext?: AuthorizationContext) => {
    if (
      context.req.user.username === 'nestjs-query-3' &&
      (authorizationContext?.operationGroup === OperationGroup.READ ||
        authorizationContext?.operationGroup === OperationGroup.AGGREGATE)
    ) {
      return {}
    }
    if (context.req.user.username === 'nestjs-query-3' && authorizationContext?.operationGroup === OperationGroup.CREATE) {
      throw new UnauthorizedException()
    }
    return { ownerId: { eq: context.req.user.id } }
  }
})
@Relation('owner', () => UserDTO)
@FilterableCursorConnection('subTasks', () => SubTaskDTO, {
  update: { enabled: true }
})
@FilterableCursorConnection('tags', () => TagDTO, {
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

  @FilterableField()
  completed!: boolean

  @FilterableField(() => GraphQLISODateTime)
  created!: Date

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date

  @Field()
  age!: number

  @FilterableField()
  priority!: number

  @FilterableField({ nullable: true })
  createdBy?: string

  @FilterableField({ nullable: true })
  updatedBy?: string

  @FilterableField()
  ownerId!: number
}
