import { User } from '../../entities';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RegisterUserDto } from '../users/dto/register-user.dto';
import { RegisterResponse } from '@libs/typings';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post('register')
  async register(
    @Body() registerUserDto: RegisterUserDto,
  ): Promise<User | RegisterResponse> {
    return this.authService.register(registerUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('login')
  async login(
    @Res({ passthrough: true }) response: Response,
    @Body() loginUserDto: LoginUserDto,
  ) {
    const login = await this.authService.login(loginUserDto);
    if (login.status === 404) {
      return { status: 'KO' };
    }
    const NODE_ENV = this.configService.get('NODE_ENV') || 'development';

    response.cookie('jwt', login.access_token, {
      httpOnly: true,
      sameSite: true,
      secure: NODE_ENV === 'production',
      signed: true,
    });
    return { status: 'OK', data: login.user };
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    const NODE_ENV = this.configService.get('NODE_ENV') || 'development';

    res.clearCookie('jwt', {
      httpOnly: true,
      sameSite: true,
      secure: NODE_ENV === 'production',
      signed: true,
    });
    return { status: 'OK' };
  }
}
