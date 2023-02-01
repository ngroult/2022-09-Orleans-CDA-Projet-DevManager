import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event, Room } from '../../entities';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Room])],
  providers: [EventsService],
  controllers: [EventsController],
})
export class EventsModule {}
