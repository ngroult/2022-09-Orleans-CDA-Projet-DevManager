import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Game } from 'src/app/games/entities/game.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  username: string;

  @Column()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column({
    select: false,
  })
  @IsNotEmpty()
  password: string;

  @OneToMany(() => Game, (game) => game.user)
  games: Game[];
}
