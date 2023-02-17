import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find({
      relations: { image: true },
    });
  }

  findLeaderboard() {
    return this.usersRepository.find({
      select: ['id', 'username'],
    });
  }

  findOne(id: number) {
    return this.usersRepository.findOne({
      where: [{ id }],
      relations: ['image'],
    });
  }

  async findAllGames(id: number) {
    const user = await this.usersRepository.findOne({
      where: [{ id: id }],
      relations: ['games', 'games.image'],
    });

    if (!user) {
      return [];
    } else {
      return user.games;
    }
  }

  private hash(password: string): Promise<string> {
    const hash = argon2.hash(password);
    return hash;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      const hash = await this.hash(updateUserDto.password);
      updateUserDto.password = hash;
    }

    const update = await this.usersRepository.update(id, updateUserDto);
    const game = await this.usersRepository.findOne({
      where: { id },
      relations: ['image'],
    });

    return game;
  }

  remove(id: number) {
    return this.usersRepository.softDelete(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      select: ['id', 'username', 'password'],
      where: { username },
    });
  }
}
