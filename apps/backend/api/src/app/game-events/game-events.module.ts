import { Module } from '@nestjs/common';
import { GameEventsService } from './game-events.service';
import { GameEventsController } from './game-events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameEvent, Event, Game } from '../../entities';

@Module({
  imports: [TypeOrmModule.forFeature([GameEvent, Game, Event])],
  controllers: [GameEventsController],
  providers: [GameEventsService],
})
export class GameEventsModule {}
