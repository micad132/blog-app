import { CommentEntity } from '../comment/comment.entity';

export const CommentMapper = {
  mapTextToCommentEntity: (text: string): CommentEntity => {
    return {
      text,
    };
  },
};
