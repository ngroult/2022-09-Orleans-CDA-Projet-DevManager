import { IsNotEmpty } from 'class-validator';

export class CreateGameEventDto {
  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  endDate: Date;

  @IsNotEmpty()
  eventId: number;

  @IsNotEmpty()
  gameId: number;
}
