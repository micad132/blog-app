import { ConflictException, Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nullable } from '../types/types';
import type { RegisterModel } from '../auth/registerDto.model';
import { UsersMapper } from '../mappers/users.mapper';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async findOne(username: string): Promise<Nullable<UserEntity>> {
    return this.userRepository.findOne({ where: { username } });
  }

  async signUp(registerDto: RegisterModel): Promise<UserEntity> {
    const existingUser = await this.userRepository.findOne({
      where: { username: registerDto.username },
    });

    if (existingUser) {
      throw new ConflictException('User with this username already exists!');
    }
    const mappedDtoToEntity = await UsersMapper.mapDtoToEntity(registerDto);
    const user = this.userRepository.create(mappedDtoToEntity);
    return this.userRepository.save(user);
  }
}
