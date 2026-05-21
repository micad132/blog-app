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
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';

interface GqlContext {
  req: RequestWithUser;
  res: Response;
}

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
    if (isPublic) {
      return true;
    }

    let request: RequestWithUser;
    if (context.getType<GqlContextType>() === 'graphql') {
      const ctx = GqlExecutionContext.create(context);
      const { req } = ctx.getContext<GqlContext>();
      request = req;
    } else {
      request = context.switchToHttp().getRequest<RequestWithUser>();
    }

    // const request = context.switchToHttp().getRequest<RequestWithUser>();
    const token = this.extractTokenFromCookies(request);
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
