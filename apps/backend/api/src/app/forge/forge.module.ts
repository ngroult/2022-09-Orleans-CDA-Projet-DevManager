import { Module } from '@nestjs/common';
import { ForgeService } from './forge.service';
import { ForgeController } from './forge.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Game,
  User,
  Room,
  Character,
  Resource,
  GameResource,
  Image,
} from '../../entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Game,
      User,
      Room,
      Character,
      Resource,
      GameResource,
      Image,
    ]),
  ],
  controllers: [ForgeController],
  providers: [ForgeService],
})
export class ForgeModule {}
