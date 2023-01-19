import { Module } from '@nestjs/common';
import { GameCharactersService } from './game-characters.service';
import { GameCharactersController } from './game-characters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameCharacter, Room, Game, Character } from '../../entities';

@Module({
  imports: [TypeOrmModule.forFeature([GameCharacter, Game, Room, Character])],
  controllers: [GameCharactersController],
  providers: [GameCharactersService],
})
export class GameCharactersModule {}
