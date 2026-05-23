import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserResponseDTO } from '../users/userResponseDTO';

@ObjectType()
export class CommentResponseDTO {
  @Field(() => Int)
  id!: number;

  @Field()
  text!: string;

  @Field()
  createdAt!: Date;

  @Field(() => UserResponseDTO)
  user!: UserResponseDTO;
}
