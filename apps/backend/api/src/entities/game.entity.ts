import { User } from './user.entity';
import { GameResource } from './game-resource.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @ManyToOne(() => User, (user) => user.games)
  user: User;

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

  @DeleteDateColumn()
  deletedAt: Date;
}
