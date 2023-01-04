import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column('varchar', { length: 50 })
  name: string;

  @Column('varchar', { length: 50 })
  decription: string;

  @Column('varchar', { length: 50 })
  image: string;

  @Column({ unsigned: true })
  price: number;

  @Column('varchar', { length: 50 })
  color: string;
}
