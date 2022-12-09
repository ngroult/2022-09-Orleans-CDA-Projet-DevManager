import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from 'src/users/entities/user.entity';

@Module({
  providers: [AuthService, UsersService],
  imports: [UsersModule, TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
})
export class AuthModule {}
