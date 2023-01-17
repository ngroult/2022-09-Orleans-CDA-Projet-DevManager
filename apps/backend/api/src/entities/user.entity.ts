import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({
    select: false,
  })
  password: string;

  @OneToMany(() => Game, (game) => game.user)
  games: Game[];
}
