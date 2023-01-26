import { Module } from '@nestjs/common';
import { IsBonusMalusService } from './is-bonus-malus.service';
import { IsBonusMalusController } from './is-bonus-malus.controller';
import { Character, Event, IsBonusMalus } from 'src/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([IsBonusMalus, Character, Event])],
  controllers: [IsBonusMalusController],
  providers: [IsBonusMalusService],
})
export class IsBonusMalusModule {}
