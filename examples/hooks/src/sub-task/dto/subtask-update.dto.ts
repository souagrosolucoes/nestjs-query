import { Field, InputType } from '@nestjs/graphql'
import { BeforeUpdateMany, BeforeUpdateOne } from '@souagrosolucoes/nestjs-query-graphql'
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'

import { UpdatedByHook } from '../../hooks'

@InputType('SubTaskUpdate')
@BeforeUpdateOne(UpdatedByHook)
@BeforeUpdateMany(UpdatedByHook)
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
}
