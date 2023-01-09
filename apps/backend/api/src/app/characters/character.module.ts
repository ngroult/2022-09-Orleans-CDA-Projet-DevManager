import { Module } from '@nestjs/common';
import { CharactersService } from './character.service';
import { CharactersController } from './character.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Character])],
  providers: [CharactersService],
  controllers: [CharactersController],
})
export class CharactersModule {}
