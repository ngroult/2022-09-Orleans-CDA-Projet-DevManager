import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  async findAll() {
    return this.gamesRepository.find({
      relations: {
        user: true,
        image: true,
      },
    });
  }

  async findOne(id: number): Promise<Game[]> {
    return this.gamesRepository.find({
      select: ['companyName', 'ceo', 'location'],
      where: [{ id: id }],
    });
  }

  async update(id: number, updateGameDto: UpdateGameDto): Promise<string> {
    const update = await this.gamesRepository.update(id, updateGameDto);

    // console.log(update);

    if (update) {
      return 'ok';
    } else {
      return 'ko';
    }
  }

  async remove(id: number): Promise<void> {
    await this.gamesRepository.softDelete(id);
  }
}
