import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';
import { Repository } from 'typeorm';
import { CommentRequestDTO } from './commentRequestDTO';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
  ) {}

  async findAll(): Promise<CommentEntity[]> {
    return this.commentRepository.find();
  }

  async findOneById(id: number): Promise<CommentEntity> {
    return this.commentRepository.findOneByOrFail({ id });
  }

  async removeCommentById(id: number): Promise<boolean> {
    await this.commentRepository.delete(id);
    return true;
  }

  async create(text: string): Promise<CommentEntity> {
    const comment = this.commentRepository.create(text);
    return this.commentRepository.save(comment);
  }
}
