import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateGameEventDto } from './dto/create-game-event.dto';
import { UpdateGameEventDto } from './dto/update-game-event.dto';
import { GameEvent, Event, Game } from '../../entities';

@Injectable()
export class GameEventsService {
  constructor(
    @InjectRepository(GameEvent)
    private gameEventsRepository: Repository<GameEvent>,
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

  async create(createGameEventDto: CreateGameEventDto) {
    const game = await this.gamesRepository
      .createQueryBuilder('game')
      .where('game.id = :id', { id: createGameEventDto.gameId })
      .getOne();

    const event = await this.eventsRepository
      .createQueryBuilder('event')
      .where('event.id = :id', { id: createGameEventDto.eventId })
      .getOne();

    const errors: { errorGame?: string; errorEvent?: string } = {};

    if (game && event) {
      await this.gameEventsRepository.save({
        game: { id: createGameEventDto.gameId },
        event: { id: createGameEventDto.eventId },
        quantity: 1000,
      });

      return { status: 'ok' };
    } else {
      if (game === null)
        errors.errorGame =
          'There is no row with the id of table "game" you try to insert in the table "gameEvent".';
      if (event === null)
        errors.errorEvent =
          'There is no row with the id of table "event" you try to insert in the table "gameEvent".';
      return errors;
    }
  }

  async findAll(gameId: number) {
    const data = await this.gameEventsRepository
      .createQueryBuilder('gameEvent')
      .leftJoinAndSelect('gameEvent.game', 'game')
      .leftJoinAndSelect('gameEvent.event', 'event')
      .leftJoinAndSelect('event.room', 'room')
      .where('game.id = :gameId', { gameId })
      .getMany();

    return data.sort((a: GameEvent, b: GameEvent): number => {
      if (a.event.order < b.event.order) return -1;
      else if (a.event.order === b.event.order) {
        if (a.event.price < b.event.price) return -1;
        else return 1;
      } else return 1;
    });
  }

  async findOne(id: number): Promise<GameEvent> {
    return await this.gameEventsRepository
      .createQueryBuilder('gameEvent')
      .leftJoinAndSelect('gameEvent.game', 'game')
      .leftJoinAndSelect('gameEvent.event', 'event')
      .leftJoinAndSelect('event.room', 'room')
      .where('gameEvent.id = :id', { id })
      .getOne();
  }

  async update(
    id: number,
    updateGameEventDto: UpdateGameEventDto,
  ): Promise<UpdateResult> {
    return this.gameEventsRepository.update(id, updateGameEventDto);
  }

  async remove(id: number): Promise<void> {
    await this.gameEventsRepository.delete(id);
  }
}
