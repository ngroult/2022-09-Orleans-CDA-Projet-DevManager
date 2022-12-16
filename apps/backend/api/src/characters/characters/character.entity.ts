import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  decription: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column()
  size: number;

  @Column()
  idRoom: number;
}
