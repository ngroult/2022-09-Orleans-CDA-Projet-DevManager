import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as crypto from 'crypto';
import { User } from '../entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  public async register(user: User): Promise<any> {
    user.password = this.hash(user.password);

    return this.usersService.create(user);
  }

  private hash(password: string): string {
    return crypto.createHmac('sha256', password).digest('hex');
  }
}
