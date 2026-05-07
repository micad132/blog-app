import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JwtPayload, RequestWithUser } from '../auth.types';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../../decorators/publicEndpoint.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log('AuthGuard hit:', context.getHandler().name);
    if (isPublic) {
      return true;
    }

    console.log('AuthGuard hit:', context.getHandler().name);
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const token = this.extractTokenFromCookies(request);
    console.log('token', token);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token);
      request.user = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromCookies(request: Request): string | undefined {
    const cookies = request.cookies as { accessToken: string };
    return cookies?.accessToken;
  }
}
