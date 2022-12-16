import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { unsigned: true })
  idUser: number;

  @Column('datetime')
  createdAt: string;

  @Column('varchar', { length: 50 })
  companyName: string;

  @Column('varchar', { length: 50 })
  ceo: string;

  @Column('varchar', { length: 50 })
  location: string;

  @Column('int', { unsigned: true })
  idImage: number;
}
