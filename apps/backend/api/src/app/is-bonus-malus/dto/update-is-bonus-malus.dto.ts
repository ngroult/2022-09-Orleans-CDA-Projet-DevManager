import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateIsBonusMalusDto } from './create-is-bonus-malus.dto';

export class UpdateIsBonusMalusDto extends PartialType(CreateIsBonusMalusDto) {
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
