import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(user: User): Promise<CreateUserDto> {
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

  public async login(
    user: User,
  ): Promise<
    { expires_in: number; access_token: string } | { status: number }
  > {
    return this.validate(user.email).then(async (userData) => {
      // user not found
      if (!userData || userData.password !== (await this.hash(user.password))) {
        return { status: 404 };
      }
      // user found
      // The access token will be composed by the email
      const payload = `${userData.email}`;
      const accessToken = this.jwtService.sign(payload);

      return {
        expires_in: 3600, // 1hour
        access_token: accessToken,
      };
    });
  }
}
