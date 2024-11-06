import { ArgsType, Field } from '@nestjs/graphql'
import { Class } from '@souagrosolucoes/nestjs-query-core'
import { Type } from 'class-transformer'
import { ValidateNested } from 'class-validator'

export interface MutationArgsType<Input> {
  input: Input
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentional
export function MutationArgsType<Input>(InputClass: Class<Input>): Class<MutationArgsType<Input>> {
  @ArgsType()
  class MutationArgs implements MutationArgsType<Input> {
    @Type(() => InputClass)
    @ValidateNested()
    @Field(() => InputClass)
    input!: Input
  }

  return MutationArgs
}
