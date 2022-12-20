import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {
  @IsNotEmpty()
  companyName: string;

  @IsNotEmpty()
  ceo: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  idImage: number;
}
