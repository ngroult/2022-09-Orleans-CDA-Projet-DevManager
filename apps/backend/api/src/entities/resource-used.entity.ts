import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Resource } from './resource.entity';
import { Character } from './character.entity';

@Entity()
export class ResourceUsed {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Resource, (resource) => resource.resourcesUsed)
  resource: Resource;

  @ManyToOne(() => Character, (character) => character.resourcesUsed)
  character: Character;
}
