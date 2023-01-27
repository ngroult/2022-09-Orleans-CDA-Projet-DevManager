import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateGameResourceDto } from './create-game-resource.dto';

export class UpdateGameResourceDto extends PartialType(CreateGameResourceDto) {
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  gameId: number;

  @IsNotEmpty()
  resourceId: number;
}
