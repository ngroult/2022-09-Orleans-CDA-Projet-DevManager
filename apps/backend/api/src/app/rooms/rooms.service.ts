import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room) private roomsRepository: Repository<Room>,
  ) {}

  async create(createRoomDto: CreateRoomDto) {
    return this.roomsRepository.save(createRoomDto);
  }
  async findAll() {
    return this.roomsRepository.find();
  }

  async findOne(id: number): Promise<Room[]> {
    return this.roomsRepository.find({
      select: ['id', 'name', 'description', 'color', 'price', 'isExpandable'],
      where: [{ id: id }],
    });
  }

  async update(
    id: number,
    updateRoomDto: UpdateRoomDto,
  ): Promise<UpdateResult> {
    return this.roomsRepository.update(id, updateRoomDto);
  }

  async remove(id: number): Promise<void> {
    await this.roomsRepository.delete(id);
  }
}
