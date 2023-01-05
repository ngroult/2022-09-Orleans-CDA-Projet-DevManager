import { Module } from '@nestjs/common';
import { CharactersService } from './character.service';
import { CharactersController } from './character.controller';
import { Character } from './entities/character.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Character])],
  providers: [CharactersService],
  controllers: [CharactersController],
})
export class CharactersModule {}
