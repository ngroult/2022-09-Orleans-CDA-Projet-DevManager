import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { GameRoom } from './game-room.entity';
import { Event } from './event.entity';
import { Character } from './character.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', { length: 200 })
  name: string;

  @Column('varchar', { length: 2000 })
  description: string;

  @Column('varchar', { length: 200 })
  image: string;

  @Column('varchar', { length: 200 })
  label: string;

  @Column('varchar', { length: 15 })
  color: string;

  @Column({ type: 'int', width: 200 })
  price: number;

  @Column({ type: 'boolean' })
  isExpandable: boolean;

  @OneToMany(() => GameRoom, (gameRoom) => gameRoom.room)
  gameRooms: GameRoom[];

  @OneToMany(() => Character, (character) => character.room)
  characters: Character[];

  @OneToMany(() => Event, (event) => event.room)
  events: Event[];
}
