import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ResourceProduced, Resource, Character } from '../../entities';
import { CreateResourceProducedDto } from './dto/create-resource-produced.dto';
import { UpdateResourceProducedDto } from './dto/update-resource-produced.dto';

@Injectable()
export class ResourcesProducedService {
  constructor(
    @InjectRepository(ResourceProduced)
    private resourcesProducedRepository: Repository<ResourceProduced>,
    @InjectRepository(Resource)
    private resourcesRepository: Repository<Resource>,
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
  ) {}

  async create(createResourceProducedDto: CreateResourceProducedDto) {
    const character = await this.charactersRepository
      .createQueryBuilder('character')
      .where('character.id = :id', {
        id: createResourceProducedDto.characterId,
      })
      .getOne();

    const resource = await this.resourcesRepository
      .createQueryBuilder('resource')
      .where('resource.id = :id', { id: createResourceProducedDto.resourceId })
      .getOne();

    const errors: { errorCharacter?: string; errorResource?: string } = {};

    if (character && resource) {
      await this.resourcesProducedRepository.save({
        character: { id: createResourceProducedDto.characterId },
        resource: { id: createResourceProducedDto.resourceId },
        quantity: 1000,
      });

      return { status: 'ok' };
    } else {
      if (character === null)
        errors.errorCharacter =
          'There is no row with the id of table "character" you try to insert in the table "resourcesProduced".';
      if (resource === null)
        errors.errorResource =
          'There is no row with the id of table "resource" you try to insert in the table "resourcesProduced".';
      return errors;
    }
  }

  async findAll() {
    return this.resourcesProducedRepository.find({
      relations: { character: true, resource: true },
    });
  }

  async findOne(id: number): Promise<ResourceProduced[]> {
    return this.resourcesProducedRepository.find({
      select: ['quantity'],
      where: [{ id: id }],
      relations: { character: true, resource: true },
    });
  }

  async update(
    id: number,
    updateResourceProducedDto: UpdateResourceProducedDto,
  ): Promise<UpdateResult> {
    return this.resourcesProducedRepository.update(
      id,
      updateResourceProducedDto,
    );
  }

  async remove(id: number): Promise<void> {
    await this.resourcesProducedRepository.delete(id);
  }
}
