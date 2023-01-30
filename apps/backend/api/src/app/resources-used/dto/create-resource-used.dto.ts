import { IsNumber } from 'class-validator';

export class CreateResourceUsedDto {
  @IsNumber()
  quantity: number;

  @IsNumber()
  resourceId: number;

  @IsNumber()
  characterId: number;
}
