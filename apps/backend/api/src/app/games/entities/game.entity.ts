import { User } from 'src/app/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @ManyToOne(() => User, (user) => user.games)
  user: User;

  @Column('varchar', { length: 50 })
  companyName: string;

  @Column('varchar', { length: 50 })
  ceo: string;

  @Column('varchar', { length: 50 })
  location: string;

  @Column('int', { unsigned: true })
  idImage: number;
}
