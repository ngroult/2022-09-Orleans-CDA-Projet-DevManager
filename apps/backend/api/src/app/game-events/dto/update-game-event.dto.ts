import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateGameEventDto } from './create-game-event.dto';

export class UpdateGameEventDto extends PartialType(CreateGameEventDto) {
  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  endDate: Date;

  @IsNotEmpty()
  eventId: number;

  @IsNotEmpty()
  gameId: number;
}
