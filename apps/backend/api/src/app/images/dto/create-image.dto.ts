import { IsString } from 'class-validator';

export class CreateImageDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  category: string;
}
