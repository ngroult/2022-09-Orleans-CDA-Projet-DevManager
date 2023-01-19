import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', { length: 200 })
  name: string;

  @Column('varchar', { length: 2000 })
  category: string;

  @OneToMany(() => User, (user) => user.image)
  users: User[];
}
