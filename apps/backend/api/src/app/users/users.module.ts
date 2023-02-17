import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Image } from '../../entities';

@Module({
  imports: [TypeOrmModule.forFeature([User, Image])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
