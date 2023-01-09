import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from '../../entities/game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private gamesRepository: Repository<Game>,
  ) {}

  async create(createGameDto: CreateGameDto): Promise<Game> {
    return this.gamesRepository.save(createGameDto);
  }

  async findAll() {
    return this.gamesRepository.find({
      relations: {
        user: true,
      },
    });
  }

  async findOne(id: number): Promise<Game[]> {
    return this.gamesRepository.find({
      select: ['user', 'companyName', 'ceo', 'location', 'idImage'],
      where: [{ id: id }],
    });
  }

  async update(
    id: number,
    updateGameDto: UpdateGameDto,
  ): Promise<UpdateResult> {
    return this.gamesRepository.update(id, updateGameDto);
  }

  async remove(id: number): Promise<void> {
    await this.gamesRepository.delete(id);
  }
}
