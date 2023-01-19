import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameCharacterDto } from './dto/create-game-character.dto';
import { UpdateGameCharacterDto } from './dto/update-game-character.dto';
import { GameCharacter, Room, Game, Character } from '../../entities';

@Injectable()
export class GameCharactersService {
  constructor(
    @InjectRepository(GameCharacter)
    private gameCharactersRepository: Repository<GameCharacter>,
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>,
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
  ) {}

  async create(createGameCharacterDto: CreateGameCharacterDto) {
    const game = await this.gamesRepository
      .createQueryBuilder('game')
      .where('game.id = :id', { id: createGameCharacterDto.gameId })
      .getOne();

    const character = await this.charactersRepository
      .createQueryBuilder('room')
      .where('character.id = :id', { id: createGameCharacterDto.characterId })
      .getOne();

    const errors: {
      errorGame?: string;
      errorRoom?: string;
      errorCharacter?: string;
    } = {};

    if (game && character) {
      this.gameCharactersRepository.save({
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

  async findAll() {
    return this.gameCharactersRepository.find({
      relations: { game: true, character: true },
    });
  }

  async findOne(id: number): Promise<GameCharacter[]> {
    return this.gameCharactersRepository.find({
      select: ['quantity', 'game', 'character'],
      where: [{ id: id }],
      relations: { game: true, character: true },
    });
  }

  update(id: number, updateGameCharacterDto: UpdateGameCharacterDto) {
    return `This action updates a #${id} gameCharacter`;
  }

  async remove(id: number): Promise<void> {
    await this.gameCharactersRepository.delete(id);
  }
}
