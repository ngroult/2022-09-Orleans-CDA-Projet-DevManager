import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { GameCharacter } from './game-character.entity';
import { IsBonusMalus } from './isBonusMalus.entity';
import { ResourceUsed } from './resource-used.entity';
import { ResourceProduced } from './resource-produced.entity';
import { Room } from './room.entity';

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column()
  size: number;

  @Column()
  idRoom: number;

  @OneToMany(() => GameCharacter, (gameCharacter) => gameCharacter.character)
  gameCharacters: GameCharacter[];

  @OneToMany(() => IsBonusMalus, (isBonusMalus) => isBonusMalus.character)
  isBonusMalus: IsBonusMalus[];

  @OneToMany(() => ResourceUsed, (resourcesUsed) => resourcesUsed.character)
  resourcesUsed: ResourceUsed[];

  @OneToMany(
    () => ResourceProduced,
    (resourcesProduced) => resourcesProduced.character,
  )
  resourcesProduced: ResourceProduced[];

  @ManyToOne(() => Room, (room) => room.characters)
  room: Room;
}
