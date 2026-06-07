import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class ChangePasswordDTO {
  @Field()
  @IsNotEmpty()
  oldPassword!: string;

  @Field()
  @MinLength(8)
  newPassword!: string;
}
