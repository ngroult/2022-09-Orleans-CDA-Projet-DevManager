import { Module } from '@nestjs/common';
import { GameResourcesService } from './game-resources.service';
import { GameResourcesController } from './game-resources.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameResource } from './entities/game-resource.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameResource])],
  controllers: [GameResourcesController],
  providers: [GameResourcesService]
})
export class GameResourcesModule {}
