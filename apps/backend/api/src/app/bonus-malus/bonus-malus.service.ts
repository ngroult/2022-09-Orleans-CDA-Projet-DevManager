import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character, BonusMalus } from 'src/entities';
import { Repository, UpdateResult } from 'typeorm';
import { CreateBonusMalusDto } from './dto/create-bonus-malus.dto';
import { UpdateBonusMalusDto } from './dto/update-bonus-malus.dto';

@Injectable()
export class BonusMalusService {
  constructor(
    @InjectRepository(BonusMalus)
    private bonusMalusRepository: Repository<BonusMalus>,
    @InjectRepository(Event) private eventsRepository: Repository<Event>,
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
  ) {}

  async create(createBonusMalusDto: CreateBonusMalusDto) {
    const event = await this.eventsRepository
      .createQueryBuilder('event')
      .where('event.id = :id', { id: createBonusMalusDto.eventId })
      .getOne();

    const character = await this.charactersRepository
      .createQueryBuilder('character')
      .where('evecharacternt.id = :id', {
        id: createBonusMalusDto.characterId,
      })
      .getOne();

    const errors: {
      errorEvent?: string;
      errorCharacter?: string;
    } = {};
    if (event && character) {
      await this.bonusMalusRepository.save({
        event: { id: createBonusMalusDto.eventId },
        character: { id: createBonusMalusDto.characterId },
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
    return this.bonusMalusRepository.find({
      relations: { event: true, character: true },
    });
  }

  async findOne(id: number): Promise<BonusMalus[]> {
    return this.bonusMalusRepository.find({
      select: ['id', 'name', 'type', 'label', 'rate', 'isBonus'],
      where: [{ id: id }],
      relations: { event: true, character: true },
    });
  }

  async update(
    id: number,
    updateBonusMalusDto: UpdateBonusMalusDto,
  ): Promise<UpdateResult> {
    return this.bonusMalusRepository.update(id, updateBonusMalusDto);
  }

  async remove(id: number): Promise<void> {
    await this.bonusMalusRepository.delete(id);
  }
}
