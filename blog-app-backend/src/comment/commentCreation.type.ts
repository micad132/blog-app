import { UserEntity } from '../users/user.entity';

export type CommentCreationType = {
  text: string;
  user: UserEntity;
};
