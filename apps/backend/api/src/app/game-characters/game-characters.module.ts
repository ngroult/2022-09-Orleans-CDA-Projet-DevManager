import { Module } from '@nestjs/common';
import { GameCharactersService } from './game-characters.service';
import { GameCharactersController } from './game-characters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  GameCharacter,
  Game,
  Character,
  GameRoom,
  GameResource,
} from '../../entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      GameCharacter,
      Game,
      Character,
      GameRoom,
      GameResource,
    ]),
  ],
  controllers: [GameCharactersController],
  providers: [GameCharactersService],
})
export class GameCharactersModule {}
