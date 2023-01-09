import { Module } from '@nestjs/common';
import { GameResourcesService } from './game-resources.service';
import { GameResourcesController } from './game-resources.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameResource } from '../../entities';
import { Resource } from '../../entities';
import { Game } from '../../entities';

@Module({
  imports: [TypeOrmModule.forFeature([GameResource, Game, Resource])],
  controllers: [GameResourcesController],
  providers: [GameResourcesService],
})
export class GameResourcesModule {}
