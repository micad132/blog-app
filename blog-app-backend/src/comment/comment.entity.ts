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
  title!: string;

  @Field()
  @Column()
  content!: string;

  @Field()
  @CreateDateColumn()
  date!: Date;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.comments, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  user!: UserEntity;
}
