import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character, IsBonusMalus } from 'src/entities';
import { Repository, UpdateResult } from 'typeorm';
import { CreateIsBonusMalusDto } from './dto/create-is-bonus-malus.dto';
import { UpdateIsBonusMalusDto } from './dto/update-is-bonus-malus.dto';

@Injectable()
export class IsBonusMalusService {
  constructor(
    @InjectRepository(IsBonusMalus)
    private isBonusMalusRepository: Repository<IsBonusMalus>,
    @InjectRepository(Event) private eventsRepository: Repository<Event>,
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
  ) {}

  async create(createIsBonusMalusDto: CreateIsBonusMalusDto) {
    const event = await this.eventsRepository
      .createQueryBuilder('event')
      .where('event.id = :id', { id: createIsBonusMalusDto.eventId })
      .getOne();

    const character = await this.charactersRepository
      .createQueryBuilder('character')
      .where('evecharacternt.id = :id', {
        id: createIsBonusMalusDto.characterId,
      })
      .getOne();

    const errors: {
      errorEvent?: string;
      errorCharacter?: string;
    } = {};
    if (event && character) {
      this.isBonusMalusRepository.save({
        event: { id: createIsBonusMalusDto.eventId },
        character: { id: createIsBonusMalusDto.characterId },
        quantity: 1000,
      });

      return { status: 'ok' };
    } else {
      if (event === null)
        errors.errorEvent =
          'There is no row with the id of table "event" you try to insert in the table "gameCharacter".';
      if (character === null)
        errors.errorCharacter =
          'There is no row with the id of table "character" you try to insert in the table "gameCharacter".';
      return errors;
    }
  }
  async findAll() {
    return this.isBonusMalusRepository.find({
      relations: { event: true, character: true },
    });
  }

  async findOne(id: number): Promise<IsBonusMalus[]> {
    return this.isBonusMalusRepository.find({
      select: ['id', 'name', 'type', 'label', 'rate', 'isBonus'],
      where: [{ id: id }],
      relations: { event: true, character: true },
    });
  }

  async update(
    id: number,
    updateIsBonusMalusDto: UpdateIsBonusMalusDto,
  ): Promise<UpdateResult> {
    return this.isBonusMalusRepository.update(id, updateIsBonusMalusDto);
  }

  async remove(id: number): Promise<void> {
    await this.isBonusMalusRepository.delete(id);
  }
}
