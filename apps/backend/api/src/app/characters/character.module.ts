import { Module } from '@nestjs/common';
import { CharactersService } from './character.service';
import { CharactersController } from './character.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character, Room } from '../../entities';

@Module({
  imports: [TypeOrmModule.forFeature([Character, Room])],
  providers: [CharactersService],
  controllers: [CharactersController],
})
export class CharactersModule {}
