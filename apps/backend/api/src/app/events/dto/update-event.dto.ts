import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  label: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  duration: number;

  @IsNotEmpty()
  idRoom: number;
}
