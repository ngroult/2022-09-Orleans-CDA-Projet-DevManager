import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Character } from './entities/character.entity';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
  ) {}

  async create(createCharacterDto: CreateCharacterDto) {
    return this.charactersRepository.save(createCharacterDto);
  }
  async findAll() {
    return this.charactersRepository.find();
  }

  async findOne(id: number): Promise<Character[]> {
    return this.charactersRepository.find({
      select: ['id', 'name', 'description', 'image', 'price', 'size'],
      where: [{ id: id }],
    });
  }

  async update(
    id: number,
    updateCharacterDto: UpdateCharacterDto,
  ): Promise<UpdateResult> {
    return this.charactersRepository.update(id, updateCharacterDto);
  }

  async remove(id: number): Promise<void> {
    await this.charactersRepository.delete(id);
  }
}
