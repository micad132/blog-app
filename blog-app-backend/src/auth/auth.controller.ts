import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './loginDto.model';
import type { RegisterModel } from './registerDto.model';
import type { RequestWithUser } from './auth.types';
import { Public } from '../decorators/publicEndpoint.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() signInDto: LoginDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('register')
  signUp(@Body() registerDtoModel: RegisterModel) {
    return this.authService.signUp(registerDtoModel);
  }

  @Get('profile')
  getProfile(@Request() req: RequestWithUser) {
    return req.user;
  }
}
