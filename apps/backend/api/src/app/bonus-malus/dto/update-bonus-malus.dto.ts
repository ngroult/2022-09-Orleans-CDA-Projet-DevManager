import { PartialType } from '@nestjs/mapped-types';
import { CreateBonusMalusDto } from './create-bonus-malus.dto';

export class UpdateBonusMalusDto extends PartialType(CreateBonusMalusDto) {}
