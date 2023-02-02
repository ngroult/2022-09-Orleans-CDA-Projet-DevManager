import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../../entities';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from '../users/dto/register-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterResponse } from '@libs/typings';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  public async register(
    user: RegisterUserDto,
  ): Promise<User | RegisterResponse> {
    user.password = await this.hash(user.password);
    const usernameCount = await this.usersRepository.count({
      where: {
        username: user.username,
      },
    });
    const emailCount = await this.usersRepository.count({
      where: {
        email: user.email,
      },
    });

    const errors: RegisterResponse = { statusCode: 400 };
    if (usernameCount > 0) {
      errors.takenUsername = { message: 'This username is already taken' };
    }
    if (emailCount > 0) {
      errors.registeredEmail = { message: 'This email is already registered' };
    }
    if (usernameCount === 0 && emailCount === 0) {
      const newUser = { ...user, image: 1 };
      return this.usersService.create(newUser);
    } else {
      return errors;
    }
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
