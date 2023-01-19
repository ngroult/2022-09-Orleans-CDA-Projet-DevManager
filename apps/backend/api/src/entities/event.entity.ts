import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { GameEvent } from './game-event.entity';
import { IsBonusMalus } from './isBonusMalus.entity';
import { Room } from './room.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  label: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column()
  duration: number;

  @OneToMany(() => IsBonusMalus, (isBonusMalus) => isBonusMalus.event)
  isBonusMalus: IsBonusMalus[];

  @ManyToOne(() => Room, (room) => room.events)
  room: Room;

  @OneToMany(() => GameEvent, (gameEvent) => gameEvent.event)
  gameEvents: GameEvent[];
}
