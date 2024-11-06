import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NestjsQueryGraphQLModule } from '@souagrosolucoes/nestjs-query-graphql'

import { formatGraphqlError, typeormOrmConfig } from '../../helpers'
import { SubTaskModule } from '../src/sub-task/sub-task.module'
import { TagModule } from '../src/tag/tag.module'
import { TodoItemModule } from '../src/todo-item/todo-item.module'
import { batchScheduleFn } from './batch-schedule-fn'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormOrmConfig('dataloader_configuration')),

    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'examples/dataloader-configuration/schema.gql',
      formatError: formatGraphqlError
    }),

    NestjsQueryGraphQLModule.forRoot({
      dataLoader: {
        batchScheduleFn
      }
    }),

    SubTaskModule,
    TodoItemModule,
    TagModule
  ]
})
export class AppModule {}
