import { IsNumber } from 'class-validator';

export class CreateGameCharacterDto {
  @IsNumber()
  quantity: number;

  @IsNumber()
  gameId: number;

  @IsNumber()
  characterId: number;
}
