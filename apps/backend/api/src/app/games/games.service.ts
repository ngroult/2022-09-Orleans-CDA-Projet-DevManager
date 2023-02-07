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

  async findAll(gameId: number) {
    return this.gamesRepository.find({
      where: { id: gameId },
      relations: {
        user: true,
        image: true,
      },
    });
  }

  async findOne(id: number): Promise<Game[]> {
    return this.gamesRepository.find({
      select: ['companyName', 'ceo', 'location'],
      where: { id },
    });
  }

  async update(
    id: number,
    updateGameDto: UpdateGameDto,
  ): Promise<{ status: string }> {
    const update = await this.gamesRepository.update(id, updateGameDto);

    if (update.affected > 0) {
      return { status: 'ok' };
    } else {
      return { status: 'ko' };
    }
  }

  async remove(id: number): Promise<void> {
    await this.gamesRepository.softDelete(id);
  }

  async findByUser(id: number) {
    return this.gamesRepository.findOne({
      select: ['id'],
      where: { user: { id } },
    });
  }
}
