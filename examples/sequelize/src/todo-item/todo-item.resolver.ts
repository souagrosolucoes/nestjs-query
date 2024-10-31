import { Args, Query, Resolver } from '@nestjs/graphql'
import { Filter, InjectAssemblerQueryService, QueryService } from '@souagrosolucoes/nestjs-query-core'
import { ConnectionType } from '@souagrosolucoes/nestjs-query-graphql'

import { TodoItemDTO } from './dto/todo-item.dto'
import { TodoItemAssembler } from './todo-item.assembler'
import { TodoItemConnection, TodoItemQuery } from './types'

@Resolver(() => TodoItemDTO)
export class TodoItemResolver {
  constructor(@InjectAssemblerQueryService(TodoItemAssembler) readonly service: QueryService<TodoItemDTO>) {}

  // Set the return type to the TodoItemConnection
  @Query(() => TodoItemConnection)
  completedTodoItems(@Args() query: TodoItemQuery): Promise<ConnectionType<TodoItemDTO>> {
    // add the completed filter the user provided filter
    const filter: Filter<TodoItemDTO> = {
      ...query.filter,
      ...{ completed: { is: true } }
    }

    // call the original queryMany method with the new query
    return TodoItemConnection.createFromPromise((q) => this.service.query(q), { ...query, ...{ filter } })
  }

  // Set the return type to the TodoItemConnection
  @Query(() => TodoItemConnection)
  uncompletedTodoItems(@Args() query: TodoItemQuery): Promise<ConnectionType<TodoItemDTO>> {
    // add the completed filter the user provided filter
    const filter: Filter<TodoItemDTO> = {
      ...query.filter,
      ...{ completed: { is: false } }
    }

    // call the original queryMany method with the new query
    return TodoItemConnection.createFromPromise((q) => this.service.query(q), { ...query, ...{ filter } })
  }
}
