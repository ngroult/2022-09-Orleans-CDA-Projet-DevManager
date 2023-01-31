import { IsNumber } from 'class-validator';

export class CreateResourceProducedDto {
  @IsNumber()
  quantity: number;

  @IsNumber()
  resourceId: number;

  @IsNumber()
  characterId: number;
}
