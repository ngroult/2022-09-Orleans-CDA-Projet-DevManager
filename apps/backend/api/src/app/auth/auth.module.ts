import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from '../../entities';

@Module({
  providers: [AuthService, UsersService],
  imports: [UsersModule, TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
})
export class AuthModule {}
