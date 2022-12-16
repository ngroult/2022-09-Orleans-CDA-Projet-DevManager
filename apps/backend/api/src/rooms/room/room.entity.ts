import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', { length: 200 })
  name: string;

  @Column('varchar', { length: 2000 })
  description: string;

  @Column('varchar', { length: 15 })
  color: string;

  @Column({ type: 'int', width: 200 })
  price: number;

  @Column({ type: 'boolean' })
  isExpandable: boolean;
}
