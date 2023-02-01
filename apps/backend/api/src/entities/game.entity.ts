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
  DeleteDateColumn,
} from 'typeorm';
import { GameEvent } from './game-event.entity';
import { Image } from './image.entity';

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

  @OneToMany(() => GameResource, (gameResource) => gameResource.game)
  gameResources: GameResource[];

  @DeleteDateColumn()
  deletedAt: Date;
  
  @OneToMany(() => GameRoom, (gameRoom) => gameRoom.game)
  gameRooms: GameRoom[];

  @OneToMany(() => GameCharacter, (gameCharacter) => gameCharacter.game)
  gameCharacters: GameCharacter[];

  @OneToMany(() => GameEvent, (gameEvent) => gameEvent.game)
  gameEvents: GameEvent[];

  @ManyToOne(() => Image, (image) => image.games)
  image: Image;
}
