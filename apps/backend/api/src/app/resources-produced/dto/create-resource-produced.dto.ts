import { IsNotEmpty } from 'class-validator';

export class CreateResourceProducedDto {
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  resourceId: number;

  @IsNotEmpty()
  characterId: number;
}
