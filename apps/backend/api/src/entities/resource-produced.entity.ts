import { GameResource } from './game-resource.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resource } from './resource.entity';
import { Character } from './character.entity';

@Entity()
export class ResourceProduced {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column()
  quantity: number;

  @ManyToMany(() => Resource, (resource) => resource.resourcesProduced)
  resource: Resource;

  @ManyToMany(() => Character, (character) => character.resourcesProduced)
  character: Character;
}
