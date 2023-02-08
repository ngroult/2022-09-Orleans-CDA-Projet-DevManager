import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Game } from './game.entity';
import { User } from './user.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', { length: 200 })
  name?: string;

  @Column('varchar', { length: 200 })
  description?: string;

  @Column('varchar', { length: 200 })
  category?: string;

  @OneToMany(() => User, (user) => user.image)
  users?: User[];

  @OneToMany(() => Game, (game) => game.image)
  games?: Game[];
}
