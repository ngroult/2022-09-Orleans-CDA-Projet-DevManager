import { IsString } from 'class-validator';

export class CreateResourceDto {
  @IsString()
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
