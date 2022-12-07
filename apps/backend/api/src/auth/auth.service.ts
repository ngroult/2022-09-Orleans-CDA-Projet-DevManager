import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  public async register(user: User): Promise<any> {
    user.password = this.hash(user.password);

    return this.usersService.create(user);
  }

  private hash(password): string {
    return crypto.createHmac('sha256', password).digest('hex');
  }
}
