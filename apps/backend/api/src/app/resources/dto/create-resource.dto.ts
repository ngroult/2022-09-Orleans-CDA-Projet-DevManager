import { IsNotEmpty } from 'class-validator';
import { GameResource } from 'src/app/game-resources/entities/game-resource.entity';

export class CreateResourceDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  decription: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  gameResources: GameResource[];
}
