import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateGameRoomDto } from './dto/create-game-room.dto';
import { UpdateGameRoomDto } from './dto/update-game-room.dto';
import { UpdateTotalSizeGameRoomDto } from './dto/update-total-size-game-room.dto';
import { GameRoom, Room, Game, GameResource } from '../../entities';
import { count } from 'console';

@Injectable()
export class GameRoomsService {
  constructor(
    @InjectRepository(GameRoom)
    private gameRoomsRepository: Repository<GameRoom>,
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>,
    @InjectRepository(GameResource)
    private gameResourcesRepository: Repository<GameResource>,
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
      await this.gameRoomsRepository.save({
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

  async findAll(gameId: number) {
    return this.gameRoomsRepository.find({
      where: { game: { id: gameId } },
      relations: { game: true, room: true },
      order: { room: { order: 'ASC' } },
    });
  }

  async findOne(id: number): Promise<GameRoom[]> {
    return this.gameRoomsRepository.find({
      select: ['size', 'totalSize'],
      where: { id },
      relations: { game: true, room: true },
    });
  }

  async findOneByLabel(label: string, gameId: number) {
    return this.gameRoomsRepository
      .createQueryBuilder('gameRoom')
      .leftJoinAndSelect('gameRoom.game', 'game')
      .leftJoinAndSelect('gameRoom.room', 'room')
      .where('room.label = :label', { label })
      .andWhere('game.id = :gameId', { gameId })
      .getOne();
  }

  async update(
    id: number,
    updateGameRoomsDto: UpdateGameRoomDto,
  ): Promise<UpdateResult> {
    return this.gameRoomsRepository.update(id, updateGameRoomsDto);
  }

  async updateTotaleSize(
    id: number,
    updateTotaleSizeDto: UpdateTotalSizeGameRoomDto,
    gameId: number,
  ) {
    const gameRoom = await this.gameRoomsRepository
      .createQueryBuilder('gameRoom')
      .leftJoinAndSelect('gameRoom.game', 'game')
      .leftJoinAndSelect('gameRoom.room', 'room')
      .innerJoinAndSelect('game.gameResources', 'gameResources')
      .innerJoinAndSelect('gameResources.resource', 'resource')
      .where('gameRoom.id = :id', { id })
      .andWhere('gameRoom.roomId = room.id')

      .andWhere('gameRoom.gameId = :gameId', { gameId })
      .andWhere('resource.name = :name', { name: 'DevDollars' })
      .getOne();

    if (gameRoom.room.price > gameRoom.game.gameResources[0].quantity) {
      return false;
    }

    const newQuantityDevDollars =
      gameRoom.game.gameResources[0].quantity - gameRoom.room.price;

    await this.gameResourcesRepository.update(
      gameRoom.game.gameResources[0].id,
      { quantity: newQuantityDevDollars },
    );

    const newTotalSize = gameRoom.totalSize + updateTotaleSizeDto.totalSize;

    await this.gameRoomsRepository.update(id, { totalSize: newTotalSize });

    return true;
  }

  async remove(id: number): Promise<void> {
    await this.gameRoomsRepository.delete(id);
  }
}
