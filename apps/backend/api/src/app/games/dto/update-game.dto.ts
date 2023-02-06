import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';
import { Image } from 'src/entities';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {
  @IsNumber()
  image: Image;
}
