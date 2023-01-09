import { IsNotEmpty } from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  isExpandable: boolean;
}
