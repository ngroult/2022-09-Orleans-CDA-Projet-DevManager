import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../entities/user.entity';
import * as argon2 from 'argon2';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  public async register(user: User): Promise<CreateUserDto> {
    user.password = await this.hash(user.password);

    return this.usersService.create(user);
  }

  private hash(password: string) {
    const hash = argon2.hash(password);
    return hash;
  }
}
