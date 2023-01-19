import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Character } from './character.entity';
import { Event } from './event.entity';

@Entity()
export class IsBonusMalus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  label: string;

  @Column()
  rate: number;

  @Column()
  isBonus: boolean;

  @ManyToOne(() => Event, (event) => event.isBonusMalus)
  event: Event;

  @ManyToOne(() => Character, (character) => character.isBonusMalus)
  character: Character;
}
