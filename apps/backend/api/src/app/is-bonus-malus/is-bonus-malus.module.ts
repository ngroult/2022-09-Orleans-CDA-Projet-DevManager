import { Module } from '@nestjs/common';
import { IsBonusMalusService } from './is-bonus-malus.service';
import { IsBonusMalusController } from './is-bonus-malus.controller';

@Module({
  providers: [IsBonusMalusService],
  controllers: [IsBonusMalusController],
})
export class IsBonusMalusModule {}
