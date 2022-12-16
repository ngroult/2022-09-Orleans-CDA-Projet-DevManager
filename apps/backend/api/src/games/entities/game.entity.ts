import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  idUser: number;

  @Column('datetime')
  createdAt: string;

  @Column('varchar')
  companyName: string;

  @Column('varchar')
  ceo: string;

  @Column('varchar')
  location: string;

  @Column('int')
  idImage: number;
}
