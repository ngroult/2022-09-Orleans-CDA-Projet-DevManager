import { IsNumber } from 'class-validator';

export class CreateGameResourceDto {
  @IsNumber()
  quantity: number;

  @IsNumber()
  gameId: number;

  @IsNumber()
  resourceId: number;
}
