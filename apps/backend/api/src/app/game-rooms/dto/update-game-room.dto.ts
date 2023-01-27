import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateGameRoomDto } from './create-game-room.dto';

export class UpdateGameRoomDto extends PartialType(CreateGameRoomDto) {
  @IsNotEmpty()
  size: number;

  @IsNotEmpty()
  totalSize: number;

  @IsNotEmpty()
  gameId: number;

  @IsNotEmpty()
  roomId: number;
}
