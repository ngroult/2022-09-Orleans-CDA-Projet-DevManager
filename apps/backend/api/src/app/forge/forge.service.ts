import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from '../characters/entities/character.entity';
import { Game } from '../games/entities/game.entity';
import { Room } from '../rooms/entities/room.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class ForgeService {
  constructor(
    @InjectRepository(Game) private gamesRepository: Repository<Game>,
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Room) private roomsRepository: Repository<Room>,
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
  ) {}

  async create(): Promise<String> {
    this.usersRepository.save({
      id: 1,
      username: 'XXdemonSlayer',
      email: 'john.doe@email.com',
      password: 'password',
    });

    this.gamesRepository.save({
      idUser: 1,
      companyName: 'Twitter',
      ceo: 'Elon Musk',
      location: 'Paris, France',
      idImage: 1,
    });

    this.roomsRepository.save({
      id: 1,
      name: 'Open Space',
      description: 'Open Space Description',
      color: 'purple.900',
      price: 5000,
      isExpandable: true,
    });
    this.roomsRepository.save({
      id: 2,
      name: 'Offices',
      description: 'Offices Description',
      color: 'turquoise.900',
      price: 7500,
      isExpandable: true,
    });
    this.roomsRepository.save({
      id: 3,
      name: 'Break Room',
      description: 'Break Room Description',
      color: 'gold.900',
      price: 10000,
      isExpandable: true,
    });

    this.charactersRepository.save({
      id: 1,
      name: 'Intern',
      description: 'Intern description',
      image: 'intern.png',
      price: 1,
      size: 1,
      idRoom: 1,
    });
    this.charactersRepository.save({
      id: 2,
      name: 'Developer',
      description: 'Developer description',
      image: 'developer.png',
      price: 100,
      size: 5,
      idRoom: 1,
    });
    this.charactersRepository.save({
      id: 3,
      name: 'Lead developer',
      description: 'Lead developer description',
      image: 'lead_dev.png',
      price: 1000,
      size: 15,
      idRoom: 1,
    });
    this.charactersRepository.save({
      id: 4,
      name: 'Recruiter',
      description: 'Recruiter description',
      image: 'recruiter.png',
      price: 5000,
      size: 5,
      idRoom: 2,
    });
    this.charactersRepository.save({
      id: 5,
      name: 'Salesman',
      description: 'Salesman description',
      image: 'salesman.png',
      price: 5000,
      size: 5,
      idRoom: 2,
    });
    this.charactersRepository.save({
      id: 6,
      name: 'Delivery man',
      description: 'Delivery man description',
      image: 'delivery_man.png',
      price: 7500,
      size: 5,
      idRoom: 2,
    });

    return 'OK';
  }
}
