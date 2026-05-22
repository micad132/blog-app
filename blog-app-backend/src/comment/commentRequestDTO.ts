import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CommentRequestDTO {
  @Field()
  text!: string;
}
