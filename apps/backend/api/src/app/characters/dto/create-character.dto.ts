import { IsNotEmpty } from 'class-validator';

export class CreateCharacterDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  size: number;

  @IsNotEmpty()
  idRoom: number;
}
