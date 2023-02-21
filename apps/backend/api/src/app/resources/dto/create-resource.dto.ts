import { IsNumber, IsString } from 'class-validator';

export class CreateResourceDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  color: string;
}
