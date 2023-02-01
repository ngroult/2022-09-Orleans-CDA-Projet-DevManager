import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { Game, Image, User } from '../../entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Game, Image, User])],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}
