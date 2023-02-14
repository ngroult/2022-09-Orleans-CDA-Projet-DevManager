import { IsNumber } from 'class-validator';

export class UpdateTotalSizeGameRoomDto {
  @IsNumber()
  totalSize: number;
}
