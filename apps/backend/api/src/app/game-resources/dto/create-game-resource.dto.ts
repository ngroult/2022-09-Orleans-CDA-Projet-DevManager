import { IsNotEmpty } from 'class-validator';

export class CreateGameResourceDto {
  @IsNotEmpty()
  gameId: number;

  @IsNotEmpty()
  resourceId: number;

  @IsNotEmpty()
  quantity: number;
}
