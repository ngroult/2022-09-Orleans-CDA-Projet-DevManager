import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { GameCharacter } from './game-character.entity';
import { BonusMalus } from './bonus-malus.entity';
import { ResourceUsed } from './resource-used.entity';
import { ResourceProduced } from './resource-produced.entity';
import { Room } from './room.entity';
import { Length } from 'class-validator';

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('varchar', { length: 500 })
  description: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column({ type: 'int', width: 3 })
  order: number;

  @Column()
  size: number;

  @OneToMany(() => GameCharacter, (gameCharacter) => gameCharacter.character)
  gameCharacters: GameCharacter[];

  @OneToMany(() => BonusMalus, (bonusMalus) => bonusMalus.character)
  bonusMalus: BonusMalus[];

  @OneToMany(() => ResourceUsed, (resourceUsed) => resourceUsed.character)
  resourcesUsed: ResourceUsed[];

  @OneToMany(
    () => ResourceProduced,
    (resourceProduced) => resourceProduced.character,
  )
  resourcesProduced: ResourceProduced[];

  @ManyToOne(() => Room, (room) => room.characters)
  room: Room;
}
