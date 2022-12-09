import { Module } from '@nestjs/common';
import { CharactersService } from './character.service';
import { CharactersController } from './character.controller';

@Module({
  providers: [CharactersService],
  controllers: [CharactersController],
})
export class CharactersModule {}
