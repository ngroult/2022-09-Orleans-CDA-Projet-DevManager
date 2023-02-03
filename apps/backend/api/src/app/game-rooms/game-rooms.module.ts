import { Module } from '@nestjs/common';
import { GameRoomsService } from './game-rooms.service';
import { GameRoomsController } from './game-rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameRoom, Room, Game } from '../../entities';

@Module({
  imports: [TypeOrmModule.forFeature([GameRoom, Game, Room])],
  controllers: [GameRoomsController],
  providers: [GameRoomsService],
})
export class GameRoomsModule {}
