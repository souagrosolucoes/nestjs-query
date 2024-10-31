import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@souagrosolucoes/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@souagrosolucoes/nestjs-query-typeorm'

import { USER_CONNECTION } from '../constants'
import { UserDTO } from './dto/user.dto'
import { UserInputDTO } from './dto/user-input.dto'
import { UserEntity } from './user.entity'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([UserEntity], USER_CONNECTION)],
      resolvers: [
        {
          DTOClass: UserDTO,
          EntityClass: UserEntity,
          CreateDTOClass: UserInputDTO,
          UpdateDTOClass: UserInputDTO
        }
      ]
    })
  ]
})
export class UserModule {}
