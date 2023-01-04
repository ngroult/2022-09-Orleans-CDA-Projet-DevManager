import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GameResource {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ unsigned: true })
  idGame: number;

  @Column({ unsigned: true })
  idResource: number;

  @Column({ unsigned: true })
  quantity: number;
}
