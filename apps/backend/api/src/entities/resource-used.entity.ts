import { GameResource } from './game-resource.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resource } from './resource.entity';
import { Character } from './character.entity';

@Entity()
export class ResourceUsed {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column()
  quantity: number;

  @ManyToMany(() => Resource, (resource) => resource.resourcesUsed)
  resource: Resource;

  @ManyToMany(() => Character, (character) => character.resourcesUsed)
  character: Character;
}
