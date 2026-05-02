import { Resolver, Query } from '@nestjs/graphql';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';
import { Public } from '../decorators/publicEndpoint.decorator';
import { Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/guards/role-guard';
import { Roles } from '../decorators/roles.decorator';
import { UserRole } from '../users/user.role.enum';

@Resolver(() => CommentEntity)
export class CommentResolver {
  constructor(private readonly commentsService: CommentService) {}

  @Query(() => [CommentEntity])
  posts(): Promise<CommentEntity[]> {
    return this.commentsService.findAll();
  }

  @Public()
  @Query(() => String)
  hello(): string {
    return 'cosik';
  }

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

  // @Query(() => Comment)
  // post(@Args('id', { type: () => Int }) id: number): Promise<Comment> {
  //   return this.commentsService.findOne(id);
  // }
  //
  // @Mutation(() => Comment)
  // createPost(@Args('input') input: Comment): Promise<Comment> {
  //   return this.commentsService.create(input);
  // }
}
