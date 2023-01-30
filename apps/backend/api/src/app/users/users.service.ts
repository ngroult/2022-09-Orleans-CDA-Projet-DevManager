import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, Image } from '../../entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Image) private imagesRepository: Repository<Image>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const image = await this.imagesRepository
      .createQueryBuilder('image')
      .where('image.id = :id', { id: createUserDto.imageId })
      .getOne();

    const errors: { errorImage?: string } = {};

    if (image) {
      await this.usersRepository.save({
        image: { id: createUserDto.imageId },
        quantity: 1000,
      });

      return { status: 'ok' };
    } else {
      if (image === null)
        errors.errorImage =
          'There is no row with the id of table "image" you try to insert in the table "user".';
      return errors;
    }
  }

  findAll() {
    return this.usersRepository.find();
  }

  findLeaderboard() {
    return this.usersRepository.find({
      select: ['id', 'username'],
    });
  }

  findOne(id: number) {
    return this.usersRepository.find({
      select: ['username', 'email', 'password'],
      where: [{ id: id }],
    });
  }

  private hash(password: string): Promise<string> {
    const hash = argon2.hash(password);
    return hash;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const hash = await this.hash(updateUserDto.password);
    updateUserDto.password = hash;
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      select: ['id', 'username', 'password'],
      where: { username },
    });
  }
}
