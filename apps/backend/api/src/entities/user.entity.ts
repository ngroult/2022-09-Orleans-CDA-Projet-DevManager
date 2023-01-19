import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Game } from './game.entity';
import { Image } from './image.entity';

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

  @ManyToOne(() => Image, (image) => image.users)
  image: Image;
}
