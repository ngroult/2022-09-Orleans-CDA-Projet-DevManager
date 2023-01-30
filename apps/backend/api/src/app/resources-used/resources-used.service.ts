import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ResourceUsed, Resource, Character } from '../../entities';
import { CreateResourceUsedDto } from './dto/create-resource-used.dto';
import { UpdateResourceUsedDto } from './dto/update-resource-used.dto';

@Injectable()
export class ResourcesUsedService {
  constructor(
    @InjectRepository(ResourceUsed)
    private resourcesUsedRepository: Repository<ResourceUsed>,
    @InjectRepository(Resource)
    private resourcesRepository: Repository<Resource>,
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
  ) {}

  async create(createResourceUsedDto: CreateResourceUsedDto) {
    const character = await this.charactersRepository
      .createQueryBuilder('character')
      .where('character.id = :id', { id: createResourceUsedDto.characterId })
      .getOne();

    const resource = await this.resourcesRepository
      .createQueryBuilder('resource')
      .where('resource.id = :id', { id: createResourceUsedDto.resourceId })
      .getOne();

    const errors: { errorCharacter?: string; errorResource?: string } = {};

    if (character && resource) {
      await this.resourcesUsedRepository.save({
        character: { id: createResourceUsedDto.characterId },
        resource: { id: createResourceUsedDto.resourceId },
        quantity: 1000,
      });

      return { status: 'ok' };
    } else {
      if (character === null)
        errors.errorCharacter =
          'There is no row with the id of table "character" you try to insert in the table "resourcesUsed".';
      if (resource === null)
        errors.errorResource =
          'There is no row with the id of table "resource" you try to insert in the table "resourcesUsed".';
      return errors;
    }
  }

  async findAll() {
    return this.resourcesUsedRepository.find({
      relations: { character: true, resource: true },
    });
  }

  async findOne(id: number): Promise<ResourceUsed[]> {
    return this.resourcesUsedRepository.find({
      select: ['quantity'],
      where: [{ id: id }],
      relations: { character: true, resource: true },
    });
  }

  async update(
    id: number,
    updateResourceUsedDto: UpdateResourceUsedDto,
  ): Promise<UpdateResult> {
    return this.resourcesUsedRepository.update(id, updateResourceUsedDto);
  }

  async remove(id: number): Promise<void> {
    await this.resourcesUsedRepository.delete(id);
  }
}
