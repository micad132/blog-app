import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CommentRequestDTO {
  @Field()
  title!: string;

  @Field()
  content!: string;
}
