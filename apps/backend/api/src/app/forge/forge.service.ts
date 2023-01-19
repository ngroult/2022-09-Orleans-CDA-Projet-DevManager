import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character, Game, Image, Room, User } from '../../entities';
import { Repository } from 'typeorm';

@Injectable()
export class ForgeService {
  constructor(
    @InjectRepository(Game) private gamesRepository: Repository<Game>,
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Room) private roomsRepository: Repository<Room>,
    @InjectRepository(Image) private imagesRepository: Repository<Image>,
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
  ) {}

  async create(): Promise<string> {
    this.imagesRepository.save({
      name: 'profilePic1',
      category: 'profile',
    });
    this.imagesRepository.save({
      name: 'gamePic1',
      category: 'game',
    });

    const user1 = await this.usersRepository.save({
      username: 'XXdemonSlayer',
      email: 'john.doe@email.com',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$xIIZNxgDY6IMB8y6pKDFeg$evIcTxHMeyMp67wpQaRKTz65jygd3TQuuLPjp3d+vPQ',
      image: 1,
    });

    this.gamesRepository.save({
      idUser: user1.id,
      companyName: 'Twitter',
      ceo: 'Elon Musk',
      location: 'Paris, France',
      idImage: 1,
    });

    const room1 = await this.roomsRepository.save({
      name: 'Open Space',
      description: 'Open Space Description',
      color: 'purple.900',
      price: 5000,
      isExpandable: true,
    });
    const room2 = await this.roomsRepository.save({
      name: 'Offices',
      description: 'Offices Description',
      color: 'turquoise.900',
      price: 7500,
      isExpandable: true,
    });
    const room3 = await this.roomsRepository.save({
      name: 'Break Room',
      description: 'Break Room Description',
      color: 'gold.900',
      price: 10000,
      isExpandable: false,
    });

    this.charactersRepository.save({
      name: 'Intern',
      description: 'Intern description',
      image: 'intern.png',
      price: 1,
      size: 1,
      idRoom: room1.id,
    });
    this.charactersRepository.save({
      name: 'Developer',
      description: 'Developer description',
      image: 'developer.png',
      price: 100,
      size: 5,
      idRoom: room1.id,
    });
    this.charactersRepository.save({
      name: 'Lead developer',
      description: 'Lead developer description',
      image: 'lead_dev.png',
      price: 1000,
      size: 15,
      idRoom: room1.id,
    });
    this.charactersRepository.save({
      name: 'Recruiter',
      description: 'Recruiter description',
      image: 'recruiter.png',
      price: 5000,
      size: 5,
      idRoom: room2.id,
    });
    this.charactersRepository.save({
      name: 'Salesman',
      description: 'Salesman description',
      image: 'salesman.png',
      price: 5000,
      size: 5,
      idRoom: room2.id,
    });
    this.charactersRepository.save({
      name: 'Delivery man',
      description: 'Delivery man description',
      image: 'delivery_man.png',
      price: 7500,
      size: 5,
      idRoom: room2.id,
    });

    return 'OK';
  }
}
