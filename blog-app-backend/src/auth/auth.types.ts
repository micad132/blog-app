import { Request } from 'express';
import { UserRole } from '../users/user.role.enum';

export type JwtPayload = {
  id: number;
  username: string;
  city: string;
  country: string;
  role: UserRole;
};

export type RequestWithUser = Request & {
  user: JwtPayload;
};
