import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nullable } from '../types/types';
import type { RegisterModel } from '../auth/registerDto.model';
import { UsersMapper } from '../mappers/users.mapper';
import { UpdateUserDTO } from './updateUserDTO';
import { ChangePasswordDTO } from './dto/changePasswordDTO';
import * as bcrypt from 'bcrypt';
import { PasswordNotTheSameException } from '../exceptions/passwordNotTheSameException';
import { NewPasswordTheSameAsOldException } from '../exceptions/newPasswordTheSameAsOldException';
import { UserResponseDTO } from './userResponseDTO';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async findOne(username: string): Promise<Nullable<UserEntity>> {
    return this.userRepository.findOne({ where: { username } });
  }

  async findAll(): Promise<UserResponseDTO[]> {
    const allUsers = await this.userRepository.find();
    return allUsers.map((user) => UsersMapper.mapEntityToDTO(user));
  }

  async signUp(registerDto: RegisterModel): Promise<UserEntity> {
    console.log('sign up w srodku');
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

  async removeUserById(id: number): Promise<boolean> {
    await this.userRepository.delete(id);
    return true;
  }

  async update(updateUserInput: UpdateUserDTO): Promise<UserEntity> {
    const { id, ...rest } = updateUserInput;

    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    Object.assign(user, rest);

    return this.userRepository.save(user);
  }

  async changeMyPassword(id: number, input: ChangePasswordDTO) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    const matches = await bcrypt.compare(input.oldPassword, user.password);
    if (!matches) {
      throw new PasswordNotTheSameException();
    }
    const isNewPasswordTheSameAsOld = await bcrypt.compare(
      input.newPassword,
      user.password,
    );
    if (isNewPasswordTheSameAsOld) {
      throw new NewPasswordTheSameAsOldException();
    }
    user.password = await bcrypt.hash(input.newPassword, 10);
    await this.userRepository.save(user);
    return true;
  }
}
