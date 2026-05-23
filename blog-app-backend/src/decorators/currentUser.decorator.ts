import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { JwtPayload, RequestWithUser } from '../auth/auth.types';

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    if (context.getType<GqlContextType>() === 'graphql') {
      const ctx = GqlExecutionContext.create(context);
      return ctx.getContext<{ req: { user: JwtPayload } }>().req.user;
    }
    return context.switchToHttp().getRequest<RequestWithUser>().user;
  },
);
