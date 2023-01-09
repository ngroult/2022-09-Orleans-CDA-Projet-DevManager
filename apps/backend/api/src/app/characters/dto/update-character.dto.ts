import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateCharacterDto } from './create-character.dto';

export class UpdateCharacterDto extends PartialType(CreateCharacterDto) {
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
