import { IsDate, IsNumber } from 'class-validator';

export class CreateGameEventDto {
  @IsDate()
  startDate: string;

  @IsDate()
  endDate: string;

  @IsNumber()
  eventId: number;

  @IsNumber()
  gameId: number;
}
