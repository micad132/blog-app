import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';
import { Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/guards/role-guard';
import { Roles } from '../decorators/roles.decorator';
import { UserRole } from '../users/user.role.enum';
import type { JwtPayload } from '../auth/auth.types';
import { CurrentUser } from '../decorators/currentUser.decorator';
import { CommentResponseDTO } from './commentResponseDTO';

@Resolver(() => CommentEntity)
export class CommentResolver {
  constructor(private readonly commentsService: CommentService) {}

  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @Get('admin')
  onlyAdmin(): string {
    return 'only admin';
  }

  @Get('public-user')
  publicUser(): string {
    return 'public user';
  }

  @Mutation(() => CommentEntity)
  createComment(
    @Args('text') text: string,
    @CurrentUser() jwtPayload: JwtPayload,
  ): Promise<CommentEntity> {
    return this.commentsService.create(text, jwtPayload);
  }

  @Query(() => [CommentResponseDTO], { name: 'comments' })
  findAll(): Promise<CommentResponseDTO[]> {
    return this.commentsService.findAll();
  }

  @Query(() => CommentResponseDTO, { name: 'comment' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<CommentResponseDTO> {
    return this.commentsService.findOneById(id);
  }

  @Roles(UserRole.ADMIN)
  @Mutation(() => Boolean)
  removeComment(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.commentsService.removeCommentById(id);
  }
}
