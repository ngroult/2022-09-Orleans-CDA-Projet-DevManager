import { Module } from '@nestjs/common';
import { ForgeProdService } from './forge-prod.service';
import { ForgeProdController } from './forge-prod.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Room,
  Character,
  Resource,
  Event,
  BonusMalus,
  ResourceUsed,
  ResourceProduced,
  Image,
} from '../../entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Room,
      Character,
      Resource,
      Event,
      BonusMalus,
      ResourceUsed,
      ResourceProduced,
      Image,
    ]),
  ],
  controllers: [ForgeProdController],
  providers: [ForgeProdService],
})
export class ForgeProdModule {}
