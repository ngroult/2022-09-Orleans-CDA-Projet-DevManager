import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from '../../entities';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private gamesRepository: Repository<Game>,
  ) {}

  async create(createGameDto: CreateGameDto) {
    return await this.gamesRepository.save(createGameDto);
  }

  async findAll() {
    return this.gamesRepository.find();
  }

  async verifyGame(id: number) {
    return this.gamesRepository
      .createQueryBuilder('game')
      .leftJoinAndSelect('game.user', 'user')
      .where('user.id = :id', { id: id })
      .getCount();
  }

  async findOne(id: number): Promise<Game[]> {
    return this.gamesRepository.find({
      select: ['companyName', 'ceo', 'location'],
      where: { id },
    });
  }

  async update(id: number, updateGameDto: UpdateGameDto) {
    const update = await this.gamesRepository.update(id, updateGameDto);
    const game = await this.gamesRepository.findOne({
      where: { id },
      relations: ['image'],
    });

    return game;
  }

  async remove(id: number): Promise<void> {
    await this.gamesRepository.softDelete(id);
  }

  async findOneByUser(id: number) {
    return this.gamesRepository.findOne({
      select: ['id'],
      where: { user: { id } },
    });
  }
}
