import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import type { RegisterModel } from './registerDto.model';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { JwtPayload } from './auth.types';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
    res: Response,
  ): Promise<JwtPayload> {
    const user = await this.usersService.findOne(username);

    if (!user) {
      throw new UnauthorizedException('There is no user with this username!');
    }

    const isPasswordValid = await bcrypt.compare(pass, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Password is incorrect!');
    }

    // if (user?.password !== pass) {
    //   throw new UnauthorizedException();
    // }
    const payload = { sub: user.id, username: user.username, role: user.role };
    const accessToken = await this.jwtService.signAsync(payload);
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    return payload;
  }

  async signUp(signUpModel: RegisterModel): Promise<void> {
    await this.usersService.signUp(signUpModel);
  }
}
