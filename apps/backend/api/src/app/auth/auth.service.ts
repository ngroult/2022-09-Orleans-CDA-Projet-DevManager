import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import * as argon2 from 'argon2';
<<<<<<< HEAD:apps/backend/api/src/auth/auth.service.ts
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
=======
import { CreateUserDto } from '../users/dto/create-user.dto';
>>>>>>> origin/develop:apps/backend/api/src/app/auth/auth.service.ts

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

  private hash(password: string) {
    const hash = argon2.hash(password);
    return hash;
  }

  async validate(email: string): Promise<any> {
    return this.usersService.getUserByUsername(email);
  }

  public async login(user: User): Promise<any | { status: number }> {
    return this.validate(user.email).then((userData) => {
      // user not found
      if (!userData || userData.password != this.hash(user.password)) {
        return { status: 404 };
      }

      // user found
      // The access token will be composed by the email
      const payload = `${userData.email}`;
      const accessToken = this.jwtService.sign(payload, { secret: 'secret' });

      return {
        expires_in: 3600, // 1hour
        access_token: accessToken,
      };
    });
  }
}
