import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idUser: number;

  @Column()
  createdAt: string;

  @Column()
  companyName: string;

  @Column()
  ceo: string;

  @Column()
  location: string;

  @Column()
  idImage: number;
}
