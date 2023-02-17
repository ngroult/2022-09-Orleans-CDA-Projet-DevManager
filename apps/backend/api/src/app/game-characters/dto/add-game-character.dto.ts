import { IsNumber } from 'class-validator';

export class AddGameCharacterDto {
  @IsNumber()
  quantity: number;
}
