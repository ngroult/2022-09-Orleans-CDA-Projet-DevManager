import { Module } from '@nestjs/common';
import { BonusMalusService } from './bonus-malus.service';
import { BonusMalusController } from './bonus-malus.controller';
import { Character, Event, BonusMalus } from '../../entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BonusMalus, Character, Event])],
  controllers: [BonusMalusController],
  providers: [BonusMalusService],
})
export class BonusMalusModule {}
