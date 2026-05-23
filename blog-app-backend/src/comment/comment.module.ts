import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentResolver } from './comment.resolver';
import { CommentEntity } from './comment.entity';
import { UserEntity } from '../users/user.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, UserEntity]), UsersModule],
  providers: [CommentService, CommentResolver],
})
export class CommentModule {}
