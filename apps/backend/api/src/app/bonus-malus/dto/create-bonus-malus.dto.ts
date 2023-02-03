import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateBonusMalusDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  label: string;

  @IsNumber()
  rate: number;

  @IsBoolean()
  isBonus: boolean;

  @IsNumber()
  eventId: number;

  @IsNumber()
  characterId: number;
}
