import { Module } from '@nestjs/common';
import { ForgeService } from './forge.service';
import { ForgeController } from './forge.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character, Game, Image, Room, User } from '../../entities';

@Module({
  imports: [TypeOrmModule.forFeature([Game, User, Room, Character, Image])],
  controllers: [ForgeController],
  providers: [ForgeService],
})
export class ForgeModule {}
