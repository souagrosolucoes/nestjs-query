import { Field, InputType } from '@nestjs/graphql'
import { BeforeUpdateMany, BeforeUpdateOne, UpdateManyInputType, UpdateOneInputType } from '@souagrosolucoes/nestjs-query-graphql'
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'

import { UserContext } from '../../auth/auth.interfaces'
import { SubTaskDTO } from './sub-task.dto'

@InputType('SubTaskUpdate')
@BeforeUpdateOne((input: UpdateOneInputType<SubTaskUpdateDTO>, context: UserContext) => {
  // eslint-disable-next-line no-param-reassign
  input.update.updatedBy = context.req.user.username
  return input
})
@BeforeUpdateMany((input: UpdateManyInputType<SubTaskDTO, SubTaskUpdateDTO>, context: UserContext) => {
  // eslint-disable-next-line no-param-reassign
  input.update.updatedBy = context.req.user.username
  return input
})
export class SubTaskUpdateDTO {
  @Field()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  title?: string

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description?: string

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  completed?: boolean

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  todoItemId?: string

  // dont expose these fields in the graphql schema
  updatedBy!: string
}
