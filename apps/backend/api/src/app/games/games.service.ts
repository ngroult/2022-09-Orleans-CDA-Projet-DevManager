import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game, Image, User } from '../../entities';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private gamesRepository: Repository<Game>,
    @InjectRepository(Image) private imagesRepository: Repository<Image>,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createGameDto: CreateGameDto) {
    const image = await this.imagesRepository
      .createQueryBuilder('image')
      .where('image.id = :id', { id: createGameDto.imageId })
      .getOne();

    const user = await this.usersRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id: createGameDto.userId })
      .getOne();

    const errors: { errorImage?: string; errorUser?: string } = {};

    if (image && user) {
      await this.gamesRepository.save({
        image: { id: createGameDto.imageId },
        user: { id: createGameDto.userId },
        quantity: 1000,
      });

      return { status: 'ok' };
    } else {
      if (image === null)
        errors.errorImage =
          'There is no row with the id of table "image" you try to insert in the table "game".';
      if (user === null)
        errors.errorUser =
          'There is no row with the id of table "user" you try to insert in the table "game".';
      return errors;
    }
  }

  async findAll(gameId: number): Promise<Game[]> {
    return this.gamesRepository.find({
      where: { id: gameId },
      relations: {
        user: true,
        image: true,
      },
    });
  }

  async findAllForReal() {
    return await this.gamesRepository
      .createQueryBuilder('game')
      .leftJoinAndSelect('game.image', 'gameImage')
      .leftJoinAndSelect('game.user', 'user')
      .leftJoinAndSelect('user.image', 'image')
      .getMany();
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
  ): Promise<UpdateResult> {
    return this.gamesRepository.update(id, updateGameDto);
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
