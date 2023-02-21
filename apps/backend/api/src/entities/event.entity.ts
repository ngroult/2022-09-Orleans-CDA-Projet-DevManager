import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { GameEvent } from './game-event.entity';
import { BonusMalus } from './bonus-malus.entity';
import { Room } from './room.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('varchar', { length: 200 })
  label: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column({ type: 'int', width: 3 })
  order: number;

  @Column()
  duration: number;

  @OneToMany(() => BonusMalus, (bonusMalus) => bonusMalus.event)
  bonusMalus: BonusMalus[];

  @ManyToOne(() => Room, (room) => room.events)
  room: Room;

  @OneToMany(() => GameEvent, (gameEvent) => gameEvent.event)
  gameEvents: GameEvent[];
}
