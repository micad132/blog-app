import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  async findOne(username: string): Promise<UserEntity | undefined> {
    // return this.users.find((user) => user.username === username);
  }
}
