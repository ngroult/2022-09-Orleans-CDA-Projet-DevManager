import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateBonusMalusDto } from './create-bonus-malus.dto';

export class UpdateBonusMalusDto extends PartialType(CreateBonusMalusDto) {
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
}
