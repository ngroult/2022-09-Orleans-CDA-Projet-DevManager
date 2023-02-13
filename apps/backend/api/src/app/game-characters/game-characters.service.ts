import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateGameCharacterDto } from './dto/create-game-character.dto';
import { UpdateGameCharacterDto } from './dto/update-game-character.dto';
import {
  GameCharacter,
  Game,
  Character,
  GameRoom,
  GameResource,
} from '../../entities';
import { AddGameCharacterDto } from './dto/add-game-character.dto';

@Injectable()
export class GameCharactersService {
  constructor(
    @InjectRepository(GameCharacter)
    private gameCharactersRepository: Repository<GameCharacter>,
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
    @InjectRepository(GameRoom)
    private gameRoomsRepository: Repository<GameRoom>,
    @InjectRepository(GameResource)
    private gameResourcesRepository: Repository<GameResource>,
  ) {}

  async create(createGameCharacterDto: CreateGameCharacterDto) {
    const game = await this.gamesRepository
      .createQueryBuilder('game')
      .where('game.id = :id', { id: createGameCharacterDto.gameId })
      .getOne();

    const character = await this.charactersRepository
      .createQueryBuilder('character')
      .where('character.id = :id', { id: createGameCharacterDto.characterId })
      .getOne();

    const errors: {
      errorGame?: string;
      errorCharacter?: string;
    } = {};

    if (game && character) {
      await this.gameCharactersRepository.save({
        game: { id: createGameCharacterDto.gameId },
        character: { id: createGameCharacterDto.characterId },
        quantity: 1000,
      });

      return { status: 'ok' };
    } else {
      if (game === null)
        errors.errorGame =
          'There is no row with the id of table "game" you try to insert in the table "gameCharacter".';
      if (character === null)
        errors.errorCharacter =
          'There is no row with the id of table "character" you try to insert in the table "gameCharacter".';
      return errors;
    }
  }

  async findAll(gameId: number): Promise<GameCharacter[]> {
    return this.gameCharactersRepository
      .createQueryBuilder('gameCharacter')
      .leftJoinAndSelect('gameCharacter.game', 'game')
      .leftJoinAndSelect('gameCharacter.character', 'character')
      .leftJoinAndSelect('character.room', 'room')
      .where('game.id = :gameId', { gameId })
      .orderBy('character.order', 'ASC')
      .getMany();
  }

  async findOne(id: number, gameId: number): Promise<GameCharacter> {
    return this.gameCharactersRepository
      .createQueryBuilder('gameCharacter')
      .leftJoinAndSelect('gameCharacter.game', 'game')
      .leftJoinAndSelect('gameCharacter.character', 'character')
      .leftJoinAndSelect('character.room', 'room')
      .where('gameCharacter.id = :id', { id })
      .andWhere('game.id = :gameId', { gameId })
      .getOne();
  }

  async update(
    id: number,
    updateGameCharacterDto: UpdateGameCharacterDto,
  ): Promise<UpdateResult> {
    return this.gameCharactersRepository.update(id, updateGameCharacterDto);
  }

  async remove(id: number): Promise<void> {
    await this.gameCharactersRepository.delete(id);
  }

  async addCharacter(
    gameId,
    idGameCharacter,
    addGameCharacterDto: AddGameCharacterDto,
  ) {
    const gameChar = await this.gameCharactersRepository
      .createQueryBuilder('gameCharacter')
      .innerJoinAndSelect('gameCharacter.character', 'character')
      .innerJoinAndSelect('character.room', 'room')
      .innerJoinAndSelect('room.gameRooms', 'gameRooms')
      .innerJoinAndSelect('gameCharacter.game', 'game')
      .innerJoinAndSelect('game.gameResources', 'gameResources')
      .innerJoinAndSelect('gameResources.resource', 'resource')
      .where('gameCharacter.id = :idGameCharacter', { idGameCharacter })
      .andWhere('gameRooms.gameId = gameCharacter.gameId')
      .andWhere('resource.name = :name', { name: 'DevDollars' })
      .andWhere('game.id = :gameId', { gameId })
      .getOne();
    const countSizeGameRoom =
      gameChar.character.size * addGameCharacterDto.quantity +
      gameChar.character.room.gameRooms[0].size;

    const countQuantityDevDollars =
      gameChar.character.price * addGameCharacterDto.quantity;

    if (countSizeGameRoom > gameChar.character.room.gameRooms[0].totalSize) {
      return false;
    }
    if (countQuantityDevDollars > gameChar.game.gameResources[0].quantity) {
      return false;
    }

    const newQuantityGameCharacter =
      gameChar.quantity + addGameCharacterDto.quantity;

    const newQuantityDevDollars =
      gameChar.game.gameResources[0].quantity - countQuantityDevDollars;

    await this.gameRoomsRepository.update(
      gameChar.character.room.gameRooms[0].id,
      {
        size: countSizeGameRoom,
      },
    );

    await this.gameResourcesRepository.update(
      gameChar.game.gameResources[0].id,
      { quantity: newQuantityDevDollars },
    );

    await this.gameCharactersRepository.update(idGameCharacter, {
      quantity: newQuantityGameCharacter,
    });

    return true;
  }
}
