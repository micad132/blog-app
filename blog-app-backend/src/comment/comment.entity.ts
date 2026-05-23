import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserEntity } from '../users/user.entity';

@ObjectType()
@Entity()
export class CommentEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  text!: string;

  @Field()
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.comments, {
    onDelete: 'CASCADE',
    nullable: false,
    eager: true,
  })
  user!: UserEntity;
}
