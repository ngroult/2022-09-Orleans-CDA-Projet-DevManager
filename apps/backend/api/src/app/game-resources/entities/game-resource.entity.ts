import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from '../../games/entities/game.entity';
import { Resource } from '../../resources/entities/resource.entity';

@Entity()
export class GameResource {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ unsigned: true })
  quantity: number;

  @ManyToOne(() => Game, (game) => game.gameResources)
  game: Game;

  @ManyToOne(() => Resource, (resource) => resource.gameResources)
  resource: Resource;
}
