import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from '../../entities/image.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image) private imagesRepository: Repository<Image>,
  ) {}

  async create(createImageDto: CreateImageDto): Promise<Image> {
    return await this.imagesRepository.save(createImageDto);
  }

  async findAll() {
    return this.imagesRepository.find();
  }

  async findAllByCategory(category: string) {
    return this.imagesRepository.findBy({ category });
  }

  findOne(id: number): Promise<Image[]> {
    return this.imagesRepository.find({
      select: ['name', 'category'],
      where: [{ id: id }],
    });
  }

  async update(
    id: number,
    updateImageDto: UpdateImageDto,
  ): Promise<UpdateResult> {
    return this.imagesRepository.update(id, updateImageDto);
  }

  async remove(id: number): Promise<void> {
    await this.imagesRepository.delete(id);
  }
}
