import { IsNumber, IsString } from 'class-validator';

export class CreateCharacterDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsNumber()
  price: number;

  @IsNumber()
  size: number;

  @IsNumber()
  roomId: number;
}
