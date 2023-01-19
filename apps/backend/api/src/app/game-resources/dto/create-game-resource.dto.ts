import { IsNotEmpty } from 'class-validator';

export class CreateGameResourceDto {
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  gameId: number;

  @IsNotEmpty()
  resourceId: number;
}
