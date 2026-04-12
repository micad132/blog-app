import { Resolver, Query } from '@nestjs/graphql';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';

@Resolver(() => CommentEntity)
export class CommentResolver {
  constructor(private readonly commentsService: CommentService) {}

  @Query(() => [CommentEntity])
  posts(): Promise<CommentEntity[]> {
    return this.commentsService.findAll();
  }
  @Query(() => String)
  hello(): string {
    return 'cosik';
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
