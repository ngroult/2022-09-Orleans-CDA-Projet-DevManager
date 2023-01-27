import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateGameRoomDto } from './dto/create-game-room.dto';
import { UpdateGameRoomDto } from './dto/update-game-room.dto';
import { GameRoom, Room, Game } from '../../entities';

@Injectable()
export class GameRoomsService {
  constructor(
    @InjectRepository(GameRoom)
    private gameRoomsRepository: Repository<GameRoom>,
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>,
  ) {}

  async create(createGameRoomDto: CreateGameRoomDto) {
    const game = await this.gamesRepository
      .createQueryBuilder('game')
      .where('game.id = :id', { id: createGameRoomDto.gameId })
      .getOne();

    const room = await this.roomsRepository
      .createQueryBuilder('room')
      .where('room.id = :id', { id: createGameRoomDto.roomId })
      .getOne();

    const errors: { errorGame?: string; errorRoom?: string } = {};

    if (game && room) {
      this.gameRoomsRepository.save({
        game: { id: createGameRoomDto.gameId },
        room: { id: createGameRoomDto.roomId },
        quantity: 1000,
      });

      return { status: 'ok' };
    } else {
      if (game === null)
        errors.errorGame =
          'There is no row with the id of table "game" you try to insert in the table "gameRoom".';
      if (room === null)
        errors.errorRoom =
          'There is no row with the id of table "room" you try to insert in the table "gameRoom".';
      return errors;
    }
  }

  async findAll() {
    return this.gameRoomsRepository.find({
      relations: { game: true, room: true },
    });
  }

  async findOne(id: number): Promise<GameRoom[]> {
    return this.gameRoomsRepository.find({
      select: ['size', 'totalSize'],
      where: [{ id: id }],
      relations: { game: true, room: true },
    });
  }

  async update(
    id: number,
    updateGameRoomsDto: UpdateGameRoomDto,
  ): Promise<UpdateResult> {
    return this.gameRoomsRepository.update(id, updateGameRoomsDto);
  }

  async remove(id: number): Promise<void> {
    await this.gameRoomsRepository.delete(id);
  }
}
