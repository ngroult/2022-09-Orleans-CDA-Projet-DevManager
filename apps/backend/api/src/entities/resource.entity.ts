import { GameResource } from './game-resource.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ResourceUsed } from './resource-used.entity';
import { ResourceProduced } from './resource-produced.entity';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column('varchar', { length: 50 })
  name: string;

  @Column('varchar', { length: 50 })
  description: string;

  @Column('varchar', { length: 50 })
  image: string;

  @Column({ unsigned: true })
  price: number;

  @Column('varchar', { length: 50 })
  color: string;

  @OneToMany(() => GameResource, (gameResource) => gameResource.resource)
  gameResources: GameResource[];

  @OneToMany(() => ResourceUsed, (resourcesUsed) => resourcesUsed.resource)
  resourcesUsed: ResourceUsed[];

  @OneToMany(
    () => ResourceProduced,
    (resourcesProduced) => resourcesProduced.resource,
  )
  resourcesProduced: ResourceUsed[];
}
