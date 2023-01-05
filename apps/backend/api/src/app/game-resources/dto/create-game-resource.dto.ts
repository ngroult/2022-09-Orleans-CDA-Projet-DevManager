import { IsNotEmpty } from 'class-validator';
import { DeepPartial } from 'typeorm';
import { Resource } from '../../resources/entities/resource.entity';
import { Game } from '../../games/entities/game.entity';

export class CreateGameResourceDto {
  @IsNotEmpty()
  game: DeepPartial<Game>;

  @IsNotEmpty()
  resource: DeepPartial<Resource>;

  @IsNotEmpty()
  quantity: number;
}
