import type { RegisterModel } from '../auth/registerDto.model';
import { UserEntity } from '../users/user.entity';
import * as bcrypt from 'bcrypt';
import { UserRole } from '../users/user.role.enum';
import { UserResponseDTO } from '../users/userResponseDTO';

export const UsersMapper = {
  mapDtoToEntity: async (dto: RegisterModel): Promise<Partial<UserEntity>> => {
    const passwordHash = await bcrypt.hash(dto.password, 10);
    return {
      username: dto.username,
      password: passwordHash,
      city: dto.city,
      role: UserRole.USER,
    };
  },
  mapEntityToDTO: (userEntity: UserEntity): UserResponseDTO => {
    return {
      id: userEntity.id,
      city: userEntity.city,
      role: userEntity.role,
      username: userEntity.username,
    };
  },
};
