import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@souagrosolucoes/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@souagrosolucoes/nestjs-query-typeorm'

import { TodoItemDTO } from './dto/todo-item.dto'
import { TodoItemInputDTO } from './dto/todo-item-input.dto'
import { TodoItemUpdateDTO } from './dto/todo-item-update.dto'
import { TodoItemEntity } from './todo-item.entity'
import { TodoItemService } from './todo-item.service'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],
      services: [TodoItemService],
      resolvers: [
        {
          DTOClass: TodoItemDTO,
          EntityClass: TodoItemEntity,
          ServiceClass: TodoItemService,
          CreateDTOClass: TodoItemInputDTO,
          UpdateDTOClass: TodoItemUpdateDTO
        }
      ]
    })
  ]
})
export class TodoItemModule {}
