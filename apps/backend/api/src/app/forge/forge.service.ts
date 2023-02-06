import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Character,
  Game,
  GameCharacter,
  GameRoom,
  Image,
  Room,
  User,
  Resource,
  Event,
  BonusMalus,
  GameResource,
  ResourceUsed,
  ResourceProduced,
  GameEvent,
} from '../../entities';
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
    @InjectRepository(Resource)
    private resourcesRepository: Repository<Resource>,
    @InjectRepository(GameResource)
    private gameResourcesRepository: Repository<GameResource>,
    @InjectRepository(GameRoom)
    private gameRoomsRepository: Repository<GameRoom>,
    @InjectRepository(GameCharacter)
    private gameCharactersRepository: Repository<GameCharacter>,
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
    @InjectRepository(BonusMalus)
    private bonusMalusRepository: Repository<BonusMalus>,
    @InjectRepository(ResourceUsed)
    private resourcesUsedRepository: Repository<ResourceUsed>,
    @InjectRepository(ResourceProduced)
    private resourcesProducedRepository: Repository<ResourceProduced>,
    @InjectRepository(GameEvent)
    private gameEventsRepository: Repository<GameEvent>,
  ) {}

  async create(): Promise<string> {
    const profileImage1 = await this.imagesRepository.save({
      name: 'man1',
      category: 'profile',
    });
    const profileImage2 = await this.imagesRepository.save({
      name: 'man2',
      category: 'profile',
    });
    const profileImage3 = await this.imagesRepository.save({
      name: 'man3',
      category: 'profile',
    });
    const profileImage4 = await this.imagesRepository.save({
      name: 'man4',
      category: 'profile',
    });
    const profileImage5 = await this.imagesRepository.save({
      name: 'man5',
      category: 'profile',
    });
    const profileImage6 = await this.imagesRepository.save({
      name: 'man6',
      category: 'profile',
    });
    const profileImage7 = await this.imagesRepository.save({
      name: 'man7',
      category: 'profile',
    });
    const profileImage8 = await this.imagesRepository.save({
      name: 'man8',
      category: 'profile',
    });
    const profileImage9 = await this.imagesRepository.save({
      name: 'man9',
      category: 'profile',
    });
    const profileImage10 = await this.imagesRepository.save({
      name: 'man10',
      category: 'profile',
    });
    const profileImage11 = await this.imagesRepository.save({
      name: 'woman1',
      category: 'profile',
    });
    const profileImage12 = await this.imagesRepository.save({
      name: 'woman2',
      category: 'profile',
    });
    const profileImage13 = await this.imagesRepository.save({
      name: 'woman3',
      category: 'profile',
    });
    const profileImage14 = await this.imagesRepository.save({
      name: 'woman4',
      category: 'profile',
    });
    const profileImage15 = await this.imagesRepository.save({
      name: 'woman5',
      category: 'profile',
    });
    const profileImage16 = await this.imagesRepository.save({
      name: 'woman6',
      category: 'profile',
    });
    const profileImage17 = await this.imagesRepository.save({
      name: 'woman7',
      category: 'profile',
    });
    const profileImage18 = await this.imagesRepository.save({
      name: 'woman8',
      category: 'profile',
    });
    const profileImage19 = await this.imagesRepository.save({
      name: 'woman9',
      category: 'profile',
    });
    const profileImage20 = await this.imagesRepository.save({
      name: 'woman10',
      category: 'profile',
    });

    const companyImage1 = await this.imagesRepository.save({
      name: 'company1',
      category: 'game',
    });
    const companyImage2 = await this.imagesRepository.save({
      name: 'company2',
      category: 'game',
    });
    const companyImage3 = await this.imagesRepository.save({
      name: 'company3',
      category: 'game',
    });
    const companyImage4 = await this.imagesRepository.save({
      name: 'company4',
      category: 'game',
    });
    const companyImage5 = await this.imagesRepository.save({
      name: 'company5',
      category: 'game',
    });
    const companyImage6 = await this.imagesRepository.save({
      name: 'company6',
      category: 'game',
    });
    const companyImage7 = await this.imagesRepository.save({
      name: 'company7',
      category: 'game',
    });
    const companyImage8 = await this.imagesRepository.save({
      name: 'company8',
      category: 'game',
    });
    const companyImage9 = await this.imagesRepository.save({
      name: 'company9',
      category: 'game',
    });
    const companyImage10 = await this.imagesRepository.save({
      name: 'company10',
      category: 'game',
    });

    const user1 = await this.usersRepository.save({
      username: 'XXdemonSlayer',
      email: 'john.doe@email.com',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$xIIZNxgDY6IMB8y6pKDFeg$evIcTxHMeyMp67wpQaRKTz65jygd3TQuuLPjp3d+vPQ',
      image: { id: profileImage1.id },
    });

    const game1 = await this.gamesRepository.save({
      companyName: 'Twitter',
      ceo: 'Elon Musk',
      location: 'Paris, France',
      user: { id: user1.id },
      image: { id: companyImage1.id },
    });

    const room1 = await this.roomsRepository.save({
      name: 'Open Space',
      description: 'Open Space Description',
      image: '/open_space.png',
      label: 'open-space',
      color: 'purple',
      price: 5000,
      isExpandable: true,
    });
    const room2 = await this.roomsRepository.save({
      name: 'Offices',
      description: 'Offices Description',
      image: '/offices.png',
      label: 'offices',
      color: 'turquoise',
      price: 7500,
      isExpandable: true,
    });
    const room3 = await this.roomsRepository.save({
      name: 'Break Room',
      description: 'Break Room Description',
      image: '/break_room.png',
      label: 'break-room',
      color: 'gold',
      price: 10000,
      isExpandable: false,
    });

    const character1 = await this.charactersRepository.save({
      name: 'Intern',
      description: 'Intern description',
      image: '/intern.png',
      price: 1,
      size: 1,
      room: { id: room1.id },
    });
    const character2 = await this.charactersRepository.save({
      name: 'Developer',
      description: 'Developer description',
      image: '/developer.png',
      price: 100,
      size: 5,
      room: { id: room1.id },
    });
    const character3 = await this.charactersRepository.save({
      name: 'Lead developer',
      description: 'Lead developer description',
      image: '/lead_dev.png',
      price: 1000,
      size: 15,
      room: { id: room1.id },
    });
    const character4 = await this.charactersRepository.save({
      name: 'Recruiter',
      description: 'Recruiter description',
      image: '/recruiter.png',
      price: 5000,
      size: 5,
      room: { id: room2.id },
    });
    const character5 = await this.charactersRepository.save({
      name: 'Salesman',
      description: 'Salesman description',
      image: '/salesman.png',
      price: 5000,
      size: 5,
      room: { id: room2.id },
    });
    const character6 = await this.charactersRepository.save({
      name: 'Delivery man',
      description: 'Delivery man description',
      image: '/delivery_man.png',
      price: 7500,
      size: 5,
      room: { id: room2.id },
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

    const gameResource1 = await this.gameResourcesRepository.save({
      game: { id: game1.id },
      resource: { id: resource1.id },
      quantity: 0,
    });
    const gameResource2 = await this.gameResourcesRepository.save({
      game: { id: game1.id },
      resource: { id: resource2.id },
      quantity: 0,
    });
    const gameResource3 = await this.gameResourcesRepository.save({
      game: { id: game1.id },
      resource: { id: resource3.id },
      quantity: 0,
    });
    const gameResource4 = await this.gameResourcesRepository.save({
      game: { id: game1.id },
      resource: { id: resource4.id },
      quantity: 0,
    });
    const gameResource5 = await this.gameResourcesRepository.save({
      game: { id: game1.id },
      resource: { id: resource5.id },
      quantity: 0,
    });

    // Energic drinks used by Lead Dev
    await this.resourcesUsedRepository.save({
      quantity: 1,
      resource: { id: resource2.id },
      character: { id: character3.id },
    });
    // Coffee used by Developers
    await this.resourcesUsedRepository.save({
      quantity: 1,
      resource: { id: resource3.id },
      character: { id: character2.id },
    });
    // Coffee used by Recruiters
    await this.resourcesUsedRepository.save({
      quantity: 1,
      resource: { id: resource3.id },
      character: { id: character4.id },
    });
    // Coffee used by Salesman
    await this.resourcesUsedRepository.save({
      quantity: 1,
      resource: { id: resource3.id },
      character: { id: character5.id },
    });
    // Contracts used by Lead Dev
    await this.resourcesUsedRepository.save({
      quantity: 1,
      resource: { id: resource4.id },
      character: { id: character3.id },
    });
    // Delivery orders used by Delivery man
    await this.resourcesUsedRepository.save({
      quantity: 1,
      resource: { id: resource5.id },
      character: { id: character6.id },
    });

    // DevDollars produced by Developers
    await this.resourcesProducedRepository.save({
      quantity: 100,
      resource: { id: resource1.id },
      character: { id: character2.id },
    });
    // DevDollars produced by Lead Dev
    await this.resourcesProducedRepository.save({
      quantity: 100,
      resource: { id: resource1.id },
      character: { id: character3.id },
    });
    // Energic drinks produced by Delivery man
    await this.resourcesProducedRepository.save({
      quantity: 1,
      resource: { id: resource2.id },
      character: { id: character6.id },
    });
    // Coffee produced by Interns
    await this.resourcesProducedRepository.save({
      quantity: 1,
      resource: { id: resource3.id },
      character: { id: character1.id },
    });
    // Contracts produced by Salesman
    await this.resourcesProducedRepository.save({
      quantity: 1,
      resource: { id: resource4.id },
      character: { id: character5.id },
    });
    // Delivery orders produced by Recruiters
    await this.resourcesProducedRepository.save({
      quantity: 1,
      resource: { id: resource5.id },
      character: { id: character4.id },
    });

    await this.gameRoomsRepository.save({
      game: { id: game1.id },
      room: { id: room1.id },
      size: 0,
      totalSize: 110,
    });
    await this.gameRoomsRepository.save({
      game: { id: game1.id },
      room: { id: room2.id },
      size: 0,
      totalSize: 60,
    });
    await this.gameRoomsRepository.save({
      game: { id: game1.id },
      room: { id: room3.id },
      size: 0,
      totalSize: 80,
    });

    await this.gameCharactersRepository.save({
      game: { id: game1.id },
      room: { id: room1.id },
      character: { id: character1.id },
      quantity: 0,
    });
    await this.gameCharactersRepository.save({
      game: { id: game1.id },
      room: { id: room1.id },
      character: { id: character2.id },
      quantity: 0,
    });
    await this.gameCharactersRepository.save({
      game: { id: game1.id },
      room: { id: room1.id },
      character: { id: character3.id },
      quantity: 0,
    });
    await this.gameCharactersRepository.save({
      game: { id: game1.id },
      room: { id: room2.id },
      character: { id: character4.id },
      quantity: 0,
    });
    await this.gameCharactersRepository.save({
      game: { id: game1.id },
      room: { id: room2.id },
      character: { id: character5.id },
      quantity: 0,
    });
    await this.gameCharactersRepository.save({
      game: { id: game1.id },
      room: { id: room2.id },
      character: { id: character6.id },
      quantity: 0,
    });

    const event1 = await this.eventsRepository.save({
      name: 'Hackathon',
      description: 'Hackathon description',
      label: 'hackathon',
      image: '/hackathon.png',
      price: 1000,
      duration: 600,
      room: { id: room3.id },
    });
    const event2 = await this.eventsRepository.save({
      name: 'Talent Week',
      description: 'Talent Week description',
      label: 'talent_week',
      image: '/talent_week.png',
      price: 10000,
      duration: 1800,
      room: { id: room3.id },
    });
    const event3 = await this.eventsRepository.save({
      name: 'Job Dating',
      description: 'Job Dating description',
      label: 'job_dating',
      image: '/job_dating.png',
      price: 20000,
      duration: 1200,
      room: { id: room3.id },
    });

    const isBonus1 = await this.bonusMalusRepository.save({
      name: 'Production +100%',
      type: 'production',
      label: 'interns_production_bonus',
      rate: 100,
      isBonus: true,
      event: { id: event1.id },
      character: { id: character1.id },
    });
    const isBonus2 = await this.bonusMalusRepository.save({
      name: 'Price -50%',
      type: 'price',
      label: 'interns_price_bonus',
      rate: -50,
      isBonus: true,
      event: { id: event2.id },
      character: { id: character1.id },
    });
    const isBonus3 = await this.bonusMalusRepository.save({
      name: 'Production -50%',
      type: 'production',
      label: 'developers_production_malus',
      rate: -50,
      isBonus: false,
      event: { id: event2.id },
      character: { id: character2.id },
    });
    const isBonus4 = await this.bonusMalusRepository.save({
      name: 'Price -50%',
      type: 'price',
      label: 'developers_price_bonus',
      rate: -50,
      isBonus: true,
      event: { id: event3.id },
      character: { id: character2.id },
    });
    const isBonus5 = await this.bonusMalusRepository.save({
      name: 'Production -50%',
      type: 'production',
      label: 'lead_developers_production_malus',
      rate: -50,
      isBonus: false,
      event: { id: event3.id },
      character: { id: character3.id },
    });

    const user2 = await this.usersRepository.save({
      username: 'user',
      email: 'johndoe@email.com',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$lfmnpKgxG5RlzolmWHtziQ$ESTdyDWAQMW7jayuGLv9ZVco7sSOAfDEZ0vV7qaHR4Y',
      image: { id: profileImage1.id },
    });

    const game2 = await this.gamesRepository.save({
      companyName: 'WCS',
      ceo: 'John Doe',
      location: 'Orléans, France',
      user: { id: user2.id },
      image: { id: profileImage2.id },
    });

    const gameResource21 = await this.gameResourcesRepository.save({
      game: { id: game2.id },
      resource: { id: resource1.id },
      quantity: 10,
    });
    const gameResource22 = await this.gameResourcesRepository.save({
      game: { id: game2.id },
      resource: { id: resource2.id },
      quantity: 0,
    });
    const gameResource23 = await this.gameResourcesRepository.save({
      game: { id: game2.id },
      resource: { id: resource3.id },
      quantity: 0,
    });
    const gameResource24 = await this.gameResourcesRepository.save({
      game: { id: game2.id },
      resource: { id: resource4.id },
      quantity: 0,
    });
    const gameResource25 = await this.gameResourcesRepository.save({
      game: { id: game2.id },
      resource: { id: resource5.id },
      quantity: 0,
    });
    await this.gameRoomsRepository.save({
      game: { id: game2.id },
      room: { id: room1.id },
      size: 0,
      totalSize: 110,
    });
    await this.gameRoomsRepository.save({
      game: { id: game2.id },
      room: { id: room2.id },
      size: 0,
      totalSize: 60,
    });
    await this.gameRoomsRepository.save({
      game: { id: game2.id },
      room: { id: room3.id },
      size: 0,
      totalSize: 80,
    });

    await this.gameCharactersRepository.save({
      game: { id: game2.id },
      room: { id: room1.id },
      character: { id: character1.id },
      quantity: 0,
    });
    await this.gameCharactersRepository.save({
      game: { id: game2.id },
      room: { id: room1.id },
      character: { id: character2.id },
      quantity: 0,
    });
    await this.gameCharactersRepository.save({
      game: { id: game2.id },
      room: { id: room1.id },
      character: { id: character3.id },
      quantity: 0,
    });
    await this.gameCharactersRepository.save({
      game: { id: game2.id },
      room: { id: room2.id },
      character: { id: character4.id },
      quantity: 0,
    });
    await this.gameCharactersRepository.save({
      game: { id: game2.id },
      room: { id: room2.id },
      character: { id: character5.id },
      quantity: 0,
    });
    await this.gameCharactersRepository.save({
      game: { id: game2.id },
      room: { id: room2.id },
      character: { id: character6.id },
      quantity: 0,
    });

    const gameEvent1 = await this.gameEventsRepository.save({
      startDate: '1970-01-01 00:00',
      endDate: '1970-01-01 00:00',
      event: { id: event1.id },
      game: { id: game1.id },
    });
    const gameEvent2 = await this.gameEventsRepository.save({
      startDate: '1970-01-01 00:00',
      endDate: '1970-01-01 00:00',
      event: { id: event2.id },
      game: { id: game1.id },
    });
    const gameEvent3 = await this.gameEventsRepository.save({
      startDate: '1970-01-01 00:00',
      endDate: '1970-01-01 00:00',
      event: { id: event3.id },
      game: { id: game1.id },
    });
    const gameEvent4 = await this.gameEventsRepository.save({
      startDate: '1970-01-01 00:00',
      endDate: '1970-01-01 00:00',
      event: { id: event1.id },
      game: { id: game2.id },
    });
    const gameEvent5 = await this.gameEventsRepository.save({
      startDate: '1970-01-01 00:00',
      endDate: '1970-01-01 00:00',
      event: { id: event2.id },
      game: { id: game2.id },
    });
    const gameEvent6 = await this.gameEventsRepository.save({
      startDate: '1970-01-01 00:00',
      endDate: '1970-01-01 00:00',
      event: { id: event3.id },
      game: { id: game2.id },
    });

    return 'OK';
  }
}
