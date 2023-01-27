import { IsNotEmpty } from 'class-validator';

export class CreateGameCharacterDto {
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  gameId: number;

  @IsNotEmpty()
  characterId: number;
}
