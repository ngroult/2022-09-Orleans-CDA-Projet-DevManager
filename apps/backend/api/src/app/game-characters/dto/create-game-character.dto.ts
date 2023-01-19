import { IsNotEmpty } from 'class-validator';

export class CreateGameCharacterDto {
  @IsNotEmpty()
  gameId: number;

  @IsNotEmpty()
  roomId: number;

  @IsNotEmpty()
  characterId: number;
}
