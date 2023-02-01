import { IsNumber, IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  companyName: string;

  @IsString()
  ceo: string;

  @IsString()
  location: string;

  @IsNumber()
  imageId: number;

  @IsNumber()
  userId: number;
}
