import { UseGuards, UseInterceptors } from '@nestjs/common'
import { Mutation, Resolver } from '@nestjs/graphql'
import { InjectQueryService, mergeFilter, QueryService, UpdateManyResponse } from '@souagrosolucoes/nestjs-query-core'
import { HookInterceptor, HookTypes, MutationHookArgs, UpdateManyResponseType } from '@souagrosolucoes/nestjs-query-graphql'

import { AuthGuard } from '../auth/auth.guard'
import { TodoItemDTO } from './dto/todo-item.dto'
import { TodoItemUpdateDTO } from './dto/todo-item-update.dto'
import { TodoItemEntity } from './todo-item.entity'
import { MarkTodoItemsAsCompletedArgs } from './types'

@Resolver(() => TodoItemDTO)
export class TodoItemResolver {
  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemDTO>) {}

  // Set the return type to the TodoItemConnection
  @Mutation(() => UpdateManyResponseType())
  @UseGuards(AuthGuard)
  @UseInterceptors(HookInterceptor(HookTypes.BEFORE_UPDATE_MANY, TodoItemUpdateDTO))
  markTodoItemsAsCompleted(@MutationHookArgs() { input }: MarkTodoItemsAsCompletedArgs): Promise<UpdateManyResponse> {
    return this.service.updateMany({ ...input.update, completed: true }, mergeFilter(input.filter, { completed: { is: false } }))
  }
}
