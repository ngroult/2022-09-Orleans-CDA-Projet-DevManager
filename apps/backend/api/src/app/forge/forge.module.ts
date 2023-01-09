import { Module } from '@nestjs/common';
import { ForgeService } from './forge.service';
import { ForgeController } from './forge.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character, Game, Room, User } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Game, User, Room, Character])],
  controllers: [ForgeController],
  providers: [ForgeService],
})
export class ForgeModule {}
