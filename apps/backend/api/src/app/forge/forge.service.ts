import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Character,
  Game,
  Room,
  User,
  Resource,
  GameResource,
} from '../../entities';
import { Repository } from 'typeorm';

@Injectable()
export class ForgeService {
  constructor(
    @InjectRepository(Game) private gamesRepository: Repository<Game>,
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Room) private roomsRepository: Repository<Room>,
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
    @InjectRepository(Resource)
    private resourcesRepository: Repository<Resource>,
    @InjectRepository(GameResource)
    private gameResourcesRepository: Repository<GameResource>,
  ) {}

  async create(): Promise<string> {
    const user1 = await this.usersRepository.save({
      username: 'XXdemonSlayer',
      email: 'john.doe@email.com',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$xIIZNxgDY6IMB8y6pKDFeg$evIcTxHMeyMp67wpQaRKTz65jygd3TQuuLPjp3d+vPQ',
    });

    const game1 = await this.gamesRepository.save({
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

    await this.charactersRepository.save({
      name: 'Intern',
      description: 'Intern description',
      image: '/intern.png',
      price: 1,
      size: 1,
      idRoom: room1.id,
    });
    await this.charactersRepository.save({
      name: 'Developer',
      description: 'Developer description',
      image: '/developer.png',
      price: 100,
      size: 5,
      idRoom: room1.id,
    });
    await this.charactersRepository.save({
      name: 'Lead developer',
      description: 'Lead developer description',
      image: '/lead_dev.png',
      price: 1000,
      size: 15,
      idRoom: room1.id,
    });
    await this.charactersRepository.save({
      name: 'Recruiter',
      description: 'Recruiter description',
      image: '/recruiter.png',
      price: 5000,
      size: 5,
      idRoom: room2.id,
    });
    await this.charactersRepository.save({
      name: 'Salesman',
      description: 'Salesman description',
      image: '/salesman.png',
      price: 5000,
      size: 5,
      idRoom: room2.id,
    });
    await this.charactersRepository.save({
      name: 'Delivery man',
      description: 'Delivery man description',
      image: '/delivery_man.png',
      price: 7500,
      size: 5,
      idRoom: room2.id,
    });

    const resource1 = await this.resourcesRepository.save({
      name: 'DevDollars',
      description: 'DevDollars Description',
      image: '/dollar.png',
      color: 'gold.200',
    });
    const resource2 = await this.resourcesRepository.save({
      name: 'Energic drinks',
      description: 'Energic drinks Description',
      image: '/soda.png',
      color: 'turquoise.200',
    });
    const resource3 = await this.resourcesRepository.save({
      name: 'Coffees',
      description: 'Coffees Description',
      image: '/coffee.png',
      color: 'brown.200',
    });
    const resource4 = await this.resourcesRepository.save({
      name: 'Contracts',
      description: 'Contracts Description',
      image: '/contract.png',
      color: 'blue.100',
    });
    const resource5 = await this.resourcesRepository.save({
      name: 'Delivery orders',
      description: 'Delivery orders Description',
      image: '/delivery_order.png',
      color: 'brown.500',
    });

    await this.gameResourcesRepository.save({
      game: { id: game1.id },
      resource: { id: resource1.id },
      quantity: 1257,
    });
    await this.gameResourcesRepository.save({
      game: { id: game1.id },
      resource: { id: resource2.id },
      quantity: 1951,
    });
    await this.gameResourcesRepository.save({
      game: { id: game1.id },
      resource: { id: resource3.id },
      quantity: 2752,
    });
    await this.gameResourcesRepository.save({
      game: { id: game1.id },
      resource: { id: resource4.id },
      quantity: 275,
    });
    await this.gameResourcesRepository.save({
      game: { id: game1.id },
      resource: { id: resource5.id },
      quantity: 25,
    });

    return 'OK';
  }
}
