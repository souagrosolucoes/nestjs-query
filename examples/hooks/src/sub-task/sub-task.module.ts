import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@souagrosolucoes/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@souagrosolucoes/nestjs-query-typeorm'

import { AuthModule } from '../auth/auth.module'
import { SubTaskDTO } from './dto/sub-task.dto'
import { CreateSubTaskDTO } from './dto/subtask-input.dto'
import { SubTaskUpdateDTO } from './dto/subtask-update.dto'
import { SubTaskEntity } from './sub-task.entity'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SubTaskEntity]), AuthModule],
      resolvers: [
        {
          DTOClass: SubTaskDTO,
          EntityClass: SubTaskEntity,
          CreateDTOClass: CreateSubTaskDTO,
          UpdateDTOClass: SubTaskUpdateDTO
        }
      ]
    })
  ]
})
export class SubTaskModule {}
