import { IsNotEmpty } from 'class-validator';

export class CreateBonusMalusDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  label: string;

  @IsNotEmpty()
  rate: number;

  @IsNotEmpty()
  isBonus: boolean;

  @IsNotEmpty()
  eventId: number;

  @IsNotEmpty()
  characterId: number;
}
