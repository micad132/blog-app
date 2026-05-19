import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';
import { Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/guards/role-guard';
import { Roles } from '../decorators/roles.decorator';
import { UserRole } from '../users/user.role.enum';
import { CommentRequestDTO } from './commentRequestDTO';

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
    @Args('commentRequestDTO') input: CommentRequestDTO,
  ): Promise<CommentEntity> {
    return this.commentsService.create(input);
  }

  @Query(() => [CommentEntity], { name: 'comments' })
  findAll(): Promise<CommentEntity[]> {
    return this.commentsService.findAll();
  }

  @Query(() => CommentEntity, { name: 'comment' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<CommentEntity> {
    return this.commentsService.findOneById(id);
  }

  @Mutation(() => Boolean)
  removeComment(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.commentsService.removeCommentById(id);
  }
}
