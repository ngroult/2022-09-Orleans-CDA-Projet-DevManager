import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameResourceDto } from './dto/create-game-resource.dto';
import { UpdateGameResourceDto } from './dto/update-game-resource.dto';
import { GameResource } from './entities/game-resource.entity';

@Injectable()
export class GameResourcesService {
  constructor(
    @InjectRepository(GameResource) private gameResourcesRepository: Repository<GameResource>,
  ) {}

  create(createGameResourceDto: CreateGameResourceDto) {
    return this.gameResourcesRepository.save(createGameResourceDto);
  }

  findAll() {
    return `This action returns all gameResources`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gameResource`;
  }

  update(id: number, updateGameResourceDto: UpdateGameResourceDto) {
    return `This action updates a #${id} gameResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameResource`;
  }
}
