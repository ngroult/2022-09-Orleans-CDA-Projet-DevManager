import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post('register')
  async register(@Body() user: User): Promise<User> {
    return this.authService.register(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('test')
  async test() {
    return 'yo';
  }

  @Post('login')
  async login(
    @Res({ passthrough: true }) response: Response,
    @Body() loginUserDto: LoginUserDto,
  ) {
    const login = await this.authService.login(loginUserDto);
    if (login.status) {
      return login;
    }
    const NODE_ENV = this.configService.get('NODE_ENV') || 'development';

    response.cookie('jwt', login.access_token, {
      httpOnly: true,
      sameSite: true,
      secure: NODE_ENV === 'production',
      signed: true,
    });
  }
}
