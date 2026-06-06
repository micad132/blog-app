// dto/create-user.input.ts
import { InputType, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class UpdateUserDTO {
  @Field(() => ID)
  @IsNotEmpty()
  id!: number;

  @Field()
  @MinLength(3)
  username!: string;

  @Field()
  city!: string;

  @Field()
  country!: string;
}
