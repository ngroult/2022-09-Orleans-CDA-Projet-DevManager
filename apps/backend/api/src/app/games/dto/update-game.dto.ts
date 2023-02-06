import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { Image } from 'src/entities';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {
  @IsString()
  companyName: string;

  @IsString()
  ceo: string;

  @IsString()
  location: string;

  @ValidateNested()
  @Type(() => Image)
  image: Image;
}
