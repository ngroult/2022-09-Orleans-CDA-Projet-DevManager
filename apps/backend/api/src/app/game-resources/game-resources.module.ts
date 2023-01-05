import { Module } from '@nestjs/common';
import { GameResourcesService } from './game-resources.service';
import { GameResourcesController } from './game-resources.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameResource } from './entities/game-resource.entity';
import { Resource } from '../resources/entities/resource.entity';
import { Game } from '../games/entities/game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameResource, Game, Resource])],
  controllers: [GameResourcesController],
  providers: [GameResourcesService],
})
export class GameResourcesModule {}
