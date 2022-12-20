import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() user: User): Promise<any> {
    return this.authService.register(user);
  }

  @Post('login')
  login(@Body() user: User) {
    return this.authService.login(user);
  }
}
