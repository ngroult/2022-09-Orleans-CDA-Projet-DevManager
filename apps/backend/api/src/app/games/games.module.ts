import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import {
  Character,
  Event,
  Game,
  GameCharacter,
  GameEvent,
  GameResource,
  GameRoom,
  Resource,
  Room,
} from '../../entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Game,
      Room,
      GameRoom,
      Resource,
      GameResource,
      Character,
      GameCharacter,
      Event,
      GameEvent,
    ]),
  ],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}
