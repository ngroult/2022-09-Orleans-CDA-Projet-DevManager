import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Game } from './game.entity';
import { Room } from './room.entity';
import { Character } from './character.entity';

@Entity()
export class GameCharacter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Room, (room) => room.gameCharacters)
  room: Room;

  @ManyToOne(() => Game, (game) => game.gameCharacters)
  game: Game;

  @ManyToOne(() => Character, (character) => character.gameCharacters)
  character: Character;
}
