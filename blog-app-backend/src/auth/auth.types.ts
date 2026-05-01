import { Request } from 'express';
import { UserRole } from '../users/user.role.enum';

export type JwtPayload = {
  sub: number;
  username: string;
  role: UserRole;
};

export type RequestWithUser = Request & {
  user: JwtPayload;
};
