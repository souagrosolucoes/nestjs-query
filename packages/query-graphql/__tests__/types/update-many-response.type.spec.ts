import { Query, Resolver } from '@nestjs/graphql'
import { UpdateManyResponse } from '@souagrosolucoes/nestjs-query-core'
import { UpdateManyResponseType } from '@souagrosolucoes/nestjs-query-graphql'

import { generateSchema } from '../__fixtures__'

describe('UpdateManyResponseType', () => {
  const URT = UpdateManyResponseType()
  it('should create a @nestjs/graphql object type', async () => {
    @Resolver()
    class UpdateManyResponseTypeResolver {
      @Query(() => URT)
      updateTest(): UpdateManyResponse {
        return { updatedCount: 1 }
      }
    }

    const schema = await generateSchema([UpdateManyResponseTypeResolver])
    expect(schema).toMatchSnapshot()
  })
})
