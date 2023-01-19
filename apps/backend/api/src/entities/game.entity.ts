import { User } from './user.entity';
import { GameResource } from './game-resource.entity';
import { GameRoom } from './game-room.entity';
import { GameCharacter } from './game-character.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GameEvent } from './game-event.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @ManyToOne(() => User, (user) => user.games)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @Column('varchar', { length: 50 })
  companyName: string;

  @Column('varchar', { length: 50 })
  ceo: string;

  @Column('varchar', { length: 50 })
  location: string;

  @Column('int', { unsigned: true })
  idImage: number;

  @OneToMany(() => GameResource, (gameResource) => gameResource.game)
  gameResources: GameResource[];

  @OneToMany(() => GameRoom, (gameRoom) => gameRoom.game)
  gameRooms: GameRoom[];

  @OneToMany(() => GameCharacter, (gameCharacter) => gameCharacter.game)
  gameCharacters: GameCharacter[];

  @OneToMany(() => GameEvent, (gameEvent) => gameEvent.game)
  gameEvents: GameEvent[];
}
