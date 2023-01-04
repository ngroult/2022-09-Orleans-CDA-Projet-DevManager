import { IsNotEmpty } from 'class-validator';

export class CreateGameResourceDto {
  @IsNotEmpty()
  idGame: number;

  @IsNotEmpty()
  idResource: number;

  @IsNotEmpty()
  quantity: number;
}
