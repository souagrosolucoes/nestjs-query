import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@souagrosolucoes/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@souagrosolucoes/nestjs-query-typeorm'

import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { TodoItemDTO } from './dto/todo-item.dto'
import { TodoItemInputDTO } from './dto/todo-item-input.dto'
import { TodoItemUpdateDTO } from './dto/todo-item-update.dto'
import { TodoItemAssembler } from './todo-item.assembler'
import { TodoItemEntity } from './todo-item.entity'
import { TodoItemResolver } from './todo-item.resolver'

@Module({
  providers: [TodoItemResolver],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],
      assemblers: [TodoItemAssembler],
      resolvers: [
        {
          DTOClass: TodoItemDTO,
          AssemblerClass: TodoItemAssembler,
          CreateDTOClass: TodoItemInputDTO,
          UpdateDTOClass: TodoItemUpdateDTO,
          enableAggregate: true,
          enableSubscriptions: true,
          guards: [JwtAuthGuard]
        }
      ]
    })
  ]
})
export class TodoItemModule {}
