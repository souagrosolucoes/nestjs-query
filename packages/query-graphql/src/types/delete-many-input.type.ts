import { Field, InputType } from '@nestjs/graphql'
import { Class, Filter } from '@souagrosolucoes/nestjs-query-core'
import { Type } from 'class-transformer'
import { IsNotEmptyObject, ValidateNested } from 'class-validator'

import { DeleteFilterType } from './query'

export interface DeleteManyInputType<T> {
  filter: Filter<T>
}

/**
 * The abstract input type or delete many endpoints.
 * @param DTOClass - The class the delete many input type is for. This will be used to create FilterType.
 */
// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentional
export function DeleteManyInputType<DTO>(DTOClass: Class<DTO>): Class<DeleteManyInputType<DTO>> {
  const F = DeleteFilterType(DTOClass)

  @InputType({ isAbstract: true })
  class DeleteManyInput implements DeleteManyInputType<DTO> {
    @IsNotEmptyObject()
    @Type(() => F)
    @ValidateNested()
    @Field(() => F, { description: 'Filter to find records to delete' })
    filter!: Filter<DTO>
  }

  return DeleteManyInput
}
