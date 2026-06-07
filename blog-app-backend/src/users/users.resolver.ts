import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';
import { Nullable } from '../types/types';
import { Response } from '@nestjs/common';
import type { Response as ExpressResponse } from 'express';
import { UpdateUserDTO } from './updateUserDTO';
import { CurrentUser } from '../decorators/currentUser.decorator';
import type { JwtPayload } from '../auth/auth.types';
import { ChangePasswordDTO } from './dto/changePasswordDTO';

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
    @CurrentUser() user: JwtPayload,
    @Context() context: { req: Request; res: ExpressResponse },
  ): Promise<boolean> {
    await this.usersService.removeUserById(user.id);
    context.res.clearCookie('accessToken');
    return true;
  }

  @Mutation(() => UserEntity)
  updateUser(
    @Args('updateUserDTO') updateUserDTO: UpdateUserDTO,
  ): Promise<UserEntity> {
    return this.usersService.update(updateUserDTO);
  }

  @Mutation(() => Boolean)
  async changeMyPassword(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: ChangePasswordDTO,
  ): Promise<boolean> {
    return await this.usersService.changeMyPassword(user.id, input);
  }
}
