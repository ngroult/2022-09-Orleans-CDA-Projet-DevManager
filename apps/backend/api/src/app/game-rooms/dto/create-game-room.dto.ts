import { IsNumber } from 'class-validator';

export class CreateGameRoomDto {
  @IsNumber()
  size: number;

  @IsNumber()
  totalSize: number;

  @IsNumber()
  gameId: number;

  @IsNumber()
  roomId: number;
}
