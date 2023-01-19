import { IsNotEmpty } from 'class-validator';

export class CreateGameRoomDto {
  @IsNotEmpty()
  gameId: number;

  @IsNotEmpty()
  roomId: number;
}
