import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../../entities';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(user: CreateUserDto): Promise<User> {
    user.password = await this.hash(user.password);
    return this.usersService.create(user);
  }

  private hash(password: string): Promise<string> {
    const hash = argon2.hash(password);
    return hash;
  }

  async validate(username: string): Promise<User> {
    return this.usersService.getUserByUsername(username);
  }

  public async login(user: LoginUserDto): Promise<{
    user?: Partial<User>;
    access_token?: string;
    status?: number;
  }> {
    return this.validate(user.username).then(async (userData) => {
      if (!userData) {
        return { status: 404 };
      }
      const { password, ...userDataRest } = userData;
      // user not found
      const isCorrect = await argon2.verify(password, user.password);
      if (!isCorrect) {
        return { status: 404 };
      }
      // user found
      // The access token will be composed by the email
      const payload = { username: userDataRest.username, sub: userDataRest.id };
      const accessToken = this.jwtService.sign(payload);

      return {
        user: userDataRest,
        access_token: accessToken,
      };
    });
  }
}
