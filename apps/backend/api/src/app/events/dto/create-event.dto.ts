import { IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  label: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  duration: number;

  @IsNotEmpty()
  roomId: number;
}
