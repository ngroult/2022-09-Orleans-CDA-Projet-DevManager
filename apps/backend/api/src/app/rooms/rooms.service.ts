import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from '../../entities';
import { Repository, UpdateResult } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room) private roomsRepository: Repository<Room>,
  ) {}

  async create(createRoomDto: CreateRoomDto) {
    return await this.roomsRepository.save(createRoomDto);
  }
  async findAll() {
    return this.roomsRepository.find();
  }

  async findOne(id: number): Promise<Room[]> {
    return this.roomsRepository.find({
      select: [
        'id',
        'name',
        'description',
        'image',
        'label',
        'color',
        'price',
        'isExpandable',
      ],
      where: [{ id: id }],
    });
  }

  async findOneByLabel(label: string): Promise<Room[]> {
    return this.roomsRepository.find({
      select: [
        'id',
        'name',
        'description',
        'image',
        'label',
        'color',
        'price',
        'isExpandable',
      ],
      where: [{ label: label }],
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
