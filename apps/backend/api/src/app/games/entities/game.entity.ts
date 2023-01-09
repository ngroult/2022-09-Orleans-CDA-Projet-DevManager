import { GameResource } from '../../game-resources/entities/game-resource.entity';
import {
  Column,
  Entity,
  OneToMany,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column('int', { unsigned: true })
  idUser: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column('varchar', { length: 50 })
  companyName: string;

  @Column('varchar', { length: 50 })
  ceo: string;

  @Column('varchar', { length: 50 })
  location: string;

  @Column('int', { unsigned: true })
  idImage: number;

  @OneToMany(() => GameResource, (gameResource) => gameResource.game)
  gameResources: GameResource[];
}
