import { UserEntity } from '../users/user.entity';
import { CommentCreationType } from '../comment/commentCreation.type';
import { CommentResponseDTO } from '../comment/commentResponseDTO';
import { CommentEntity } from '../comment/comment.entity';
import { UsersMapper } from './users.mapper';

export const CommentMapper = {
  mapTextToCommentEntity: (
    text: string,
    user: UserEntity,
  ): CommentCreationType => {
    return {
      text,
      user,
    };
  },
  mapEntityToDTO: (commentEntity: CommentEntity): CommentResponseDTO => {
    return {
      id: commentEntity.id,
      text: commentEntity.text,
      createdAt: commentEntity.createdAt,
      user: UsersMapper.mapEntityToDTO(commentEntity.user),
    };
  },
};
