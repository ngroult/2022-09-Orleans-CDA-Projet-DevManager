import { PartialType } from '@nestjs/mapped-types';
import { CreateGameCharacterDto } from './create-game-character.dto';

export class UpdateGameCharacterDto extends PartialType(
  CreateGameCharacterDto,
) {}
