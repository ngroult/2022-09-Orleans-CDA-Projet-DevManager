import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Resource } from './resource.entity';
import { Character } from './character.entity';

@Entity()
export class ResourceProduced {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Resource, (resource) => resource.resourcesProduced)
  resource: Resource;

  @ManyToOne(() => Character, (character) => character.resourcesProduced)
  character: Character;
}
