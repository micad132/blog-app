import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';
import { Nullable } from '../types/types';
import { Response } from '@nestjs/common';
import type { Response as ExpressResponse } from 'express';
import { UpdateUserDTO } from './updateUserDTO';

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

  @Mutation(() => Boolean)
  async deleteMyAccount(
    @Args('id', { type: () => Int }) id: number,
    @Context() context: { req: Request; res: ExpressResponse },
  ): Promise<boolean> {
    await this.usersService.removeUserById(id);
    context.res.clearCookie('accessToken');
    return true;
  }

  @Mutation(() => UserEntity)
  updateUser(
    @Args('updateUserDTO') updateUserDTO: UpdateUserDTO,
  ): Promise<UserEntity> {
    return this.usersService.update(updateUserDTO);
  }
}
