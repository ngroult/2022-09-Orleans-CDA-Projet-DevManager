import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateGameCharacterDto } from './dto/create-game-character.dto';
import { UpdateGameCharacterDto } from './dto/update-game-character.dto';
import { GameCharacter, Game, Character } from '../../entities';

@Injectable()
export class GameCharactersService {
  constructor(
    @InjectRepository(GameCharacter)
    private gameCharactersRepository: Repository<GameCharacter>,
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
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
    return await this.gameCharactersRepository
      .createQueryBuilder('gameCharacter')
      .leftJoinAndSelect('gameCharacter.game', 'game')
      .leftJoinAndSelect('gameCharacter.character', 'character')
      .leftJoinAndSelect('character.room', 'room')
      .where('game.id = :gameId', { gameId })
      .getMany();
  }

  async findOne(id: number, gameId): Promise<GameCharacter> {
    return await this.gameCharactersRepository
      .createQueryBuilder('gameCharacter')
      .leftJoinAndSelect('gameCharacter.game', 'game')
      .leftJoinAndSelect('gameCharacter.character', 'character')
      .leftJoinAndSelect('character.room', 'room')
      .where('gameCharacter.id = :id', { id })
      .where('game.id = :gameId', { gameId })
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
}
