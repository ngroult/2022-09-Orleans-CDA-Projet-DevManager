import { IsNotEmpty } from 'class-validator';

export class CreateResourceUsedDto {
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  resourceId: number;

  @IsNotEmpty()
  characterId: number;
}
