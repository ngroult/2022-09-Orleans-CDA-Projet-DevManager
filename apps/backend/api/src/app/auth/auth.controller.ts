import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() user: User): Promise<User> {
    return this.authService.register(user);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
}
