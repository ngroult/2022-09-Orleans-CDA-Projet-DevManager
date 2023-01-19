import { IsNotEmpty } from 'class-validator';

export class CreateGameCharacterDto {
  @IsNotEmpty()
  gameId: number;

  @IsNotEmpty()
  characterId: number;
}
