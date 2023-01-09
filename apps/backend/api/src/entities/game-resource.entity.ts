import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from './game.entity';
import { Resource } from './resource.entity';

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
