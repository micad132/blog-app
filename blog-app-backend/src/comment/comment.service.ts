import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';
import { Repository } from 'typeorm';
import { CommentMapper } from '../mappers/comment.mapper';
import type { JwtPayload } from '../auth/auth.types';
import { UsersService } from '../users/users.service';
import { CommentCreationType } from './commentCreation.type';
import { CommentResponseDTO } from './commentResponseDTO';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
    private readonly userService: UsersService,
  ) {}

  async findAll(): Promise<CommentResponseDTO[]> {
    const commentEntities = await this.commentRepository.find();
    const mappedResponses = commentEntities.map((commentEntity) =>
      CommentMapper.mapEntityToDTO(commentEntity),
    );
    return mappedResponses;
  }

  async findOneById(id: number): Promise<CommentResponseDTO> {
    const commentEntity = await this.commentRepository.findOneByOrFail({ id });
    return CommentMapper.mapEntityToDTO(commentEntity);
  }

  async removeCommentById(id: number): Promise<boolean> {
    await this.commentRepository.delete(id);
    return true;
  }

  async create(text: string, jwtPayload: JwtPayload): Promise<CommentEntity> {
    const user = await this.userService.findOne(jwtPayload.username);
    if (user == null) {
      throw new NotFoundException();
    }
    const mappedComment: CommentCreationType =
      CommentMapper.mapTextToCommentEntity(text, user);
    const comment = this.commentRepository.create(mappedComment);
    return this.commentRepository.save(comment);
  }
}
