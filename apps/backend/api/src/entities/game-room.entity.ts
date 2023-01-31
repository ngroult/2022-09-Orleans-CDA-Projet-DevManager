import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from './game.entity';
import { Room } from './room.entity';

@Entity()
export class GameRoom {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column()
  size: number;

  @Column()
  totalSize: number;

  @ManyToOne(() => Room, (room) => room.gameRooms)
  room: Room;

  @ManyToOne(() => Game, (game) => game.gameRooms)
  game: Game;
}
