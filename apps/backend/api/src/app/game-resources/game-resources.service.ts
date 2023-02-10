import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateGameResourceDto } from './dto/create-game-resource.dto';
import { UpdateGameResourceDto } from './dto/update-game-resource.dto';
import { GameResource, Resource, Game } from '../../entities';

@Injectable()
export class GameResourcesService {
  constructor(
    @InjectRepository(GameResource)
    private gameResourcesRepository: Repository<GameResource>,
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
    @InjectRepository(Resource)
    private resourcesRepository: Repository<Resource>,
  ) {}

  async create(createGameResourceDto: CreateGameResourceDto) {
    const game = await this.gamesRepository
      .createQueryBuilder('game')
      .where('game.id = :id', { id: createGameResourceDto.gameId })
      .getOne();

    const resource = await this.resourcesRepository
      .createQueryBuilder('resource')
      .where('resource.id = :id', { id: createGameResourceDto.resourceId })
      .getOne();

    const errors: { errorGame?: string; errorResource?: string } = {};

    if (game && resource) {
      await this.gameResourcesRepository.save({
        game: { id: createGameResourceDto.gameId },
        resource: { id: createGameResourceDto.resourceId },
        quantity: 1000,
      });

      return { status: 'ok' };
    } else {
      if (game === null)
        errors.errorGame =
          'There is no row with the id of table "game" you try to insert in the table "gameResource".';
      if (resource === null)
        errors.errorResource =
          'There is no row with the id of table "resource" you try to insert in the table "gameResource".';
      return errors;
    }
  }

  async findAll(gameId: number) {
    return this.gameResourcesRepository.find({
      where: { game: { id: gameId } },
      relations: { game: true, resource: true },
    });
  }

  async findResourcesUserGame() {
    return this.gameResourcesRepository
      .createQueryBuilder('gameResource')
      .innerJoinAndSelect('gameResource.game', 'game')
      .innerJoinAndSelect('game.image', 'gameImage')
      .innerJoinAndSelect('game.user', 'user')
      .innerJoinAndSelect('user.image', 'userImage')
      .where('gameResource.resourceId = 1')
      .orderBy('gameResource.quantity', 'DESC')
      .limit(100)
      .getMany();
  }

  async findByUserId(id: number) {
    return this.gameResourcesRepository
      .createQueryBuilder('gameResource')
      .innerJoinAndSelect('gameResource.game', 'game')
      .innerJoinAndSelect('game.image', 'gameImage')
      .innerJoinAndSelect('game.user', 'user')
      .innerJoinAndSelect('user.image', 'userImage')
      .where('user.id = :id', { id })
      .getOne();
  }

  async findOne(id: number): Promise<GameResource[]> {
    return this.gameResourcesRepository.find({
      select: ['quantity'],
      where: { id },
      relations: { game: true, resource: true },
    });
  }

  async update(
    id: number,
    updateGameResourceDto: UpdateGameResourceDto,
  ): Promise<UpdateResult> {
    return this.gameResourcesRepository.update(id, updateGameResourceDto);
  }

  async remove(id: number): Promise<void> {
    await this.gameResourcesRepository.delete(id);
  }
}
