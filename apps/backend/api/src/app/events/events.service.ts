import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event, Room } from '../../entities';
import { Repository, UpdateResult } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private eventsRepository: Repository<Event>,
    @InjectRepository(Room) private roomsRepository: Repository<Room>,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const room = await this.roomsRepository
      .createQueryBuilder('room')
      .where('room.id = :id', { id: createEventDto.roomId })
      .getOne();

    const errors: {
      errorRoom?: string;
    } = {};

    if (room) {
      this.eventsRepository.save({
        room: { id: createEventDto.roomId },
        quantity: 1000,
      });

      return { status: 'ok' };
    } else {
      if (room === null)
        errors.errorRoom =
          'There is no row with the id of table "room" you try to insert in the table "gameCharacter".';
      return errors;
    }
  }

  async findAll() {
    return this.eventsRepository.find({ relations: { room: true } });
  }

  async findOne(id: number): Promise<Event[]> {
    return this.eventsRepository.find({
      select: [
        'id',
        'name',
        'description',
        'label',
        'image',
        'price',
        'duration',
        'bonusMalus',
      ],
      where: [{ id: id }],
      relations: { room: true },
    });
  }

  async update(
    id: number,
    updateEventDto: UpdateEventDto,
  ): Promise<UpdateResult> {
    return this.eventsRepository.update(id, updateEventDto);
  }

  async remove(id: number): Promise<void> {
    await this.eventsRepository.delete(id);
  }
}
