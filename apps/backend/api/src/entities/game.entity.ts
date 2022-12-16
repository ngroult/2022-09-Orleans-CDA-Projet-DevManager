import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  idUser: number;

  @Column()
  @IsNotEmpty()
  createdAt: string;

  @Column()
  @IsNotEmpty()
  companyName: string;

  @Column()
  @IsNotEmpty()
  ceo: string;

  @Column()
  @IsNotEmpty()
  location: string;

  @Column()
  @IsNotEmpty()
  idImage: number;
}
