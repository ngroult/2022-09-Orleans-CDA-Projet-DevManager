import { IsDate, IsNumber } from 'class-validator';

export class CreateGameEventDto {
  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsNumber()
  eventId: number;

  @IsNumber()
  gameId: number;
}
