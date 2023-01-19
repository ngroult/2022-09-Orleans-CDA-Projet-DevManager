import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character, Room } from '../../entities';
import { Repository, UpdateResult } from 'typeorm';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>,
  ) {}

  async create(createCharacterDto: CreateCharacterDto) {
    const room = await this.roomsRepository
      .createQueryBuilder('room')
      .where('room.id = :id', { id: createCharacterDto.roomId })
      .getOne();

    const errors: { errorGame?: string; errorRoom?: string } = {};

    if (room) {
      this.charactersRepository.save({
        room: { id: createCharacterDto.roomId },
        quantity: 1000,
      });

      return { status: 'ok' };
    } else {
      if (room === null)
        errors.errorRoom =
          'There is no row with the id of table "room" you try to insert in the table "gameRoom".';
      return errors;
    }
  }
  async findAll() {
    return this.charactersRepository.find({ relations: { room: true } });
  }

  async findOne(id: number): Promise<Character[]> {
    return this.charactersRepository.find({
      select: ['id', 'name', 'description', 'image', 'price', 'size', 'room'],
      where: [{ id: id }],
      relations: { room: true },
    });
  }

  async update(
    id: number,
    updateCharacterDto: UpdateCharacterDto,
  ): Promise<UpdateResult> {
    return this.charactersRepository.update(id, updateCharacterDto);
  }

  async remove(id: number): Promise<void> {
    await this.charactersRepository.delete(id);
  }
}
