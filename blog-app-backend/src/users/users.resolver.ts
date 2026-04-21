import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';
import { Nullable } from '../types/types';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserEntity)
  async getUser(
    @Args('username') username: string,
  ): Promise<Nullable<UserEntity>> {
    return this.usersService.findOne(username);
  }

  @Query(() => String)
  hello(): string {
    return 'cosik';
  }
}
