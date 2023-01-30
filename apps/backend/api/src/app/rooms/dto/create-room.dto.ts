import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  label: string;

  @IsString()
  color: string;

  @IsNumber()
  price: number;

  @IsBoolean()
  isExpandable: boolean;
}
