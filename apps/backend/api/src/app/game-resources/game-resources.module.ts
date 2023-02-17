import { Module } from '@nestjs/common';
import { GameResourcesService } from './game-resources.service';
import { GameResourcesController } from './game-resources.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameResource, Resource, Game } from '../../entities';

@Module({
  imports: [TypeOrmModule.forFeature([GameResource, Game, Resource])],
  controllers: [GameResourcesController],
  providers: [GameResourcesService],
})
export class GameResourcesModule {}
