import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { GameRoom } from './game-room.entity';
import { GameCharacter } from './game-character.entity';
import { Event } from './event.entity';

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

  @Column({ type: 'int', width: 11 })
  price: number;

  @Column({ type: 'boolean' })
  isExpandable: boolean;

  @OneToMany(() => GameRoom, (gameRoom) => gameRoom.room)
  gameRooms: GameRoom[];

  @OneToMany(() => GameCharacter, (gameCharacter) => gameCharacter.character)
  gameCharacters: GameCharacter[];

  @OneToMany(() => Event, (event) => event.room)
  events: Event[];
}
