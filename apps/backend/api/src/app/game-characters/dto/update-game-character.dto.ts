import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateGameCharacterDto } from './create-game-character.dto';

export class UpdateGameCharacterDto extends PartialType(
  CreateGameCharacterDto,
) {
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  gameId: number;

  @IsNotEmpty()
  characterId: number;
}
