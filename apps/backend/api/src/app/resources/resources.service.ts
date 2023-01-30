import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Resource } from '../../entities';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';

@Injectable()
export class ResourcesService {
  constructor(
    @InjectRepository(Resource)
    private resourcesRepository: Repository<Resource>,
  ) {}

  async create(createResourceDto: CreateResourceDto) {
    return await this.resourcesRepository.save(createResourceDto);
  }

  async findAll() {
    return this.resourcesRepository.find();
  }

  async findOne(id: number): Promise<Resource[]> {
    return this.resourcesRepository.find({
      select: ['id', 'name', 'description', 'image', 'color'],
      where: [{ id: id }],
    });
  }

  async update(
    id: number,
    updateResourceDto: UpdateResourceDto,
  ): Promise<UpdateResult> {
    return this.resourcesRepository.update(id, updateResourceDto);
  }

  async remove(id: number): Promise<void> {
    await this.resourcesRepository.delete(id);
  }
}
