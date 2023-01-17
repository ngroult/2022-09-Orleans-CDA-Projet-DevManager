import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
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

  update(id: number, updateUserDto: UpdateUserDto) {
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
