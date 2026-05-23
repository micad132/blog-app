import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserRole } from './user.role.enum';

@ObjectType()
export class UserResponseDTO {
  @Field(() => Int)
  id!: number;

  @Field()
  username!: string;

  @Field()
  role!: UserRole;

  @Field()
  city!: string;
}
