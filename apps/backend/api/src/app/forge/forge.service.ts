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
import * as argon2 from 'argon2';

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
    // IMAGE

    const images = [
      {
        name: 'man1',
        category: 'user',
      },
      {
        name: 'man2',
        category: 'user',
      },
      {
        name: 'man3',
        category: 'user',
      },
      {
        name: 'man4',
        category: 'user',
      },
      {
        name: 'man5',
        category: 'user',
      },
      {
        name: 'man6',
        category: 'user',
      },
      {
        name: 'man7',
        category: 'user',
      },
      {
        name: 'man8',
        category: 'user',
      },
      {
        name: 'man9',
        category: 'user',
      },
      {
        name: 'man10',
        category: 'user',
      },
      {
        name: 'woman1',
        category: 'user',
      },
      {
        name: 'woman2',
        category: 'user',
      },
      {
        name: 'woman3',
        category: 'user',
      },
      {
        name: 'woman4',
        category: 'user',
      },
      {
        name: 'woman5',
        category: 'user',
      },
      {
        name: 'woman6',
        category: 'user',
      },
      {
        name: 'woman7',
        category: 'user',
      },
      {
        name: 'woman8',
        category: 'user',
      },
      {
        name: 'woman9',
        category: 'user',
      },
      {
        name: 'woman10',
        category: 'user',
      },
      {
        name: 'company1',
        category: 'company',
      },
      {
        name: 'company2',
        category: 'company',
      },
      {
        name: 'company3',
        category: 'company',
      },
      {
        name: 'company4',
        category: 'company',
      },
      {
        name: 'company5',
        category: 'company',
      },
      {
        name: 'company6',
        category: 'company',
      },
      {
        name: 'company7',
        category: 'company',
      },
      {
        name: 'company8',
        category: 'company',
      },
      {
        name: 'company9',
        category: 'company',
      },
      {
        name: 'company10',
        category: 'company',
      },
    ];

    for (const { name, category } of images) {
      await this.imagesRepository.save({
        name,
        category,
      });
    }

    // USER

    const users = [
      {
        username: 'azerty',
        email: 'azerty@azerty.com',
        password: 'azerty',
        imageId: 1,
      },
      {
        username: 'XXdemonSlayer',
        email: 'demon.slayer@email.com',
        password: 'password',
        imageId: 2,
      },
      {
        username: 'Patrick',
        email: 'patrick@email.com',
        password: 'password',
        imageId: 3,
      },
      {
        username: 'Baba',
        email: 'baba@email.com',
        password: 'password',
        imageId: 4,
      },
    ];

    for (const { username, email, password, imageId } of users) {
      await this.usersRepository.save({
        username,
        email,
        password: await argon2.hash(password),
        image: { id: imageId },
      });
    }

    // GAME

    const games = [
      {
        companyName: 'Twitter',
        ceo: 'Elon Musk',
        location: 'Paris, France',
        userId: 1,
        imageId: 1,
      },
      {
        companyName: 'AirBnB',
        ceo: 'Sylvain Ripoll',
        location: 'Orléans, France',
        userId: 2,
        imageId: 2,
      },
      {
        companyName: 'Sodebo',
        ceo: 'Corentin Delalande',
        location: 'Houston, Texas, USA',
        userId: 3,
        imageId: 3,
      },
      {
        companyName: 'Mairie de Saint-Amand-sur-Fion',
        ceo: 'Jean Neymar',
        location: 'Saint-Amand-sur-Fion, France',
        userId: 4,
        imageId: 4,
      },
    ];

    for (const { companyName, ceo, location, userId, imageId } of games) {
      await this.gamesRepository.save({
        companyName,
        ceo,
        location,
        user: { id: userId },
        image: { id: imageId },
      });
    }

    // ROOM

    const rooms = [
      {
        name: 'Open Space',
        description: 'Open Space description',
        image: '/open_space.png',
        label: 'open-space',
        color: 'purple',
        price: 5000,
        isExpandable: true,
      },
      {
        name: 'Offices',
        description: 'Offices description',
        image: '/offices.png',
        label: 'offices',
        color: 'turquoise',
        price: 7500,
        isExpandable: true,
      },
      {
        name: 'Break Room',
        description: 'Break Room description',
        image: '/break_room.png',
        label: 'break-room',
        color: 'gold',
        price: 10000,
        isExpandable: false,
      },
    ];

    for (const {
      name,
      description,
      image,
      label,
      color,
      price,
      isExpandable,
    } of rooms) {
      await this.roomsRepository.save({
        name,
        description,
        image,
        label,
        color,
        price,
        isExpandable,
      });
    }

    // CHARACTER

    const characters = [
      {
        name: 'Inter',
        description: 'Intern description',
        image: '/intern.png',
        price: 1,
        size: 1,
        roomId: 1,
      },
      {
        name: 'Developer',
        description: 'Developer description',
        image: '/developer.png',
        price: 100,
        size: 5,
        roomId: 1,
      },
      {
        name: 'Lead developer',
        description: 'Lead developer description',
        image: '/lead_dev.png',
        price: 1000,
        size: 15,
        roomId: 1,
      },
      {
        name: 'Recruiter',
        description: 'Recruiter description',
        image: '/recruiter.png',
        price: 5000,
        size: 5,
        roomId: 2,
      },
      {
        name: 'Salesman',
        description: 'Salesman description',
        image: '/salesman.png',
        price: 5000,
        size: 5,
        roomId: 2,
      },
      {
        name: 'Delivery man',
        description: 'Delivery man description',
        image: '/delivery_man.png',
        price: 7500,
        size: 5,
        roomId: 2,
      },
    ];

    for (const {
      name,
      description,
      image,
      price,
      size,
      roomId,
    } of characters) {
      await this.charactersRepository.save({
        name,
        description,
        image,
        price,
        size,
        room: { id: roomId },
      });
    }

    // EVENT

    const events = [
      {
        name: 'Hackathon',
        description: 'Hackathon description',
        label: 'hackathon',
        image: '/hackathon.png',
        price: 1000,
        duration: 600,
        roomId: 3,
      },
      {
        name: 'Talent Week',
        description: 'Talent Week description',
        label: 'talent_week',
        image: '/talent_week.png',
        price: 10000,
        duration: 1800,
        roomId: 3,
      },
      {
        name: 'Job Dating',
        description: 'Job Dating description',
        label: 'job_dating',
        image: '/job_dating.png',
        price: 20000,
        duration: 1200,
        roomId: 3,
      },
    ];

    for (const {
      name,
      description,
      label,
      image,
      price,
      duration,
      roomId,
    } of events) {
      await this.eventsRepository.save({
        name,
        description,
        label,
        image,
        price,
        duration,
        room: { id: roomId },
      });
    }

    // RESOURCE

    const resources = [
      {
        name: 'DevDollars',
        description: 'DevDollars Description',
        image: '/dollar.png',
        color: 'gold.200',
      },
      {
        name: 'Energic drinks',
        description: 'Energic drinks Description',
        image: '/soda.png',
        color: 'turquoise.200',
      },
      {
        name: 'Coffees',
        description: 'Coffees Description',
        image: '/coffee.png',
        color: 'brown.200',
      },
      {
        name: 'Contracts',
        description: 'Contracts Description',
        image: '/contract.png',
        color: 'blue.100',
      },
      {
        name: 'Delivery orders',
        description: 'Delivery orders Description',
        image: '/delivery_order.png',
        color: 'brown.500',
      },
    ];

    for (const { name, description, image, color } of resources) {
      await this.resourcesRepository.save({
        name,
        description,
        image,
        color,
      });
    }

    // GAME RESOURCE

    const gameResources = [
      {
        quantity: 1257,
        gameId: 1,
        resourceId: 1,
      },
      {
        quantity: 1951,
        gameId: 1,
        resourceId: 2,
      },
      {
        quantity: 2752,
        gameId: 1,
        resourceId: 3,
      },
      {
        quantity: 275,
        gameId: 1,
        resourceId: 4,
      },
      {
        quantity: 25,
        gameId: 1,
        resourceId: 5,
      },
    ];

    for (const { quantity, gameId, resourceId } of gameResources) {
      await this.gameResourcesRepository.save({
        quantity,
        game: { id: gameId },
        resource: { id: resourceId },
      });
    }

    // RESOURCE USED

    const resourcesUsed = [
      {
        quantity: 12,
        resourceId: 2, // Energy drinks
        characterId: 3, // Lead developers
      },
      {
        quantity: 1564,
        resourceId: 3, // Coffees
        characterId: 2, // Developers
      },
      {
        quantity: 1564,
        resourceId: 3, // Coffees
        characterId: 4, // Recruiters
      },
      {
        quantity: 1564,
        resourceId: 3, // Coffees
        characterId: 5, // Salesman
      },
      {
        quantity: 1564,
        resourceId: 4, // Contracts
        characterId: 3, // Lead developers
      },
      {
        quantity: 1564,
        resourceId: 5, // Delivery orders
        characterId: 6, // Delivery man
      },
    ];

    for (const { quantity, resourceId, characterId } of resourcesUsed) {
      await this.resourcesUsedRepository.save({
        quantity,
        resource: { id: resourceId },
        character: { id: characterId },
      });
    }

    // RESOURCE PRODUCED

    const resourcesProduced = [
      {
        quantity: 100,
        resourceId: 1, // DevDollars
        characterId: 2, // Developers
      },
      {
        quantity: 100,
        resourceId: 1, // DevDollars
        characterId: 2, // Lead developers
      },
      {
        quantity: 100,
        resourceId: 2, // Energy drinks
        characterId: 6, // Delivery man
      },
      {
        quantity: 100,
        resourceId: 3, // Coffees
        characterId: 1, // Interns
      },
      {
        quantity: 100,
        resourceId: 4, // Contracts
        characterId: 5, // Salesman
      },
      {
        quantity: 100,
        resourceId: 5, // Delivery orders
        characterId: 4, // Recruiters
      },
    ];

    for (const { quantity, resourceId, characterId } of resourcesProduced) {
      await this.resourcesProducedRepository.save({
        quantity,
        resource: { id: resourceId },
        character: { id: characterId },
      });
    }

    // GAME ROOM

    const gameRooms = [
      {
        gameId: 1,
        roomId: 1,
        size: 40,
        totalSize: 110,
      },
      {
        gameId: 1,
        roomId: 2,
        size: 20,
        totalSize: 60,
      },
      {
        gameId: 1,
        roomId: 3,
        size: 51,
        totalSize: 80,
      },
    ];

    for (const { gameId, roomId, size, totalSize } of gameRooms) {
      await this.gameRoomsRepository.save({
        game: { id: gameId },
        room: { id: roomId },
        size,
        totalSize,
      });
    }

    // GAME CHARACTER

    const gameCharacters = [
      {
        gameId: 1,
        roomId: 1,
        characterId: 1,
        quantity: 2,
      },
      {
        gameId: 1,
        roomId: 1,
        characterId: 2,
        quantity: 3,
      },
      {
        gameId: 1,
        roomId: 1,
        characterId: 3,
        quantity: 3,
      },
      {
        gameId: 1,
        roomId: 2,
        characterId: 4,
        quantity: 3,
      },
      {
        gameId: 1,
        roomId: 1,
        characterId: 5,
        quantity: 3,
      },
      {
        gameId: 1,
        roomId: 1,
        characterId: 6,
        quantity: 3,
      },
    ];

    for (const { gameId, roomId, characterId, quantity } of gameCharacters) {
      await this.gameCharactersRepository.save({
        game: { id: gameId },
        room: { id: roomId },
        character: { id: characterId },
        quantity,
      });
    }

    // GAME EVENT

    const gameEvents = [
      {
        startDate: '1970-01-01 00:00',
        endDate: '1970-01-01 00:00',
        event: 1,
        gameId: 1,
      },
      {
        startDate: '1970-01-01 00:00',
        endDate: '1970-01-01 00:00',
        eventId: 2,
        gameId: 1,
      },
      {
        startDate: '1970-01-01 00:00',
        endDate: '1970-01-01 00:00',
        eventId: 3,
        gameId: 1,
      },
      {
        startDate: '1970-01-01 00:00',
        endDate: '1970-01-01 00:00',
        eventId: 1,
        gameId: 2,
      },
      {
        startDate: '1970-01-01 00:00',
        endDate: '1970-01-01 00:00',
        eventId: 2,
        gameId: 2,
      },
      {
        startDate: '1970-01-01 00:00',
        endDate: '1970-01-01 00:00',
        eventId: 3,
        gameId: 2,
      },
    ];

    for (const { startDate, endDate, eventId, gameId } of gameEvents) {
      await this.gameEventsRepository.save({
        startDate,
        endDate,
        event: { id: eventId },
        game: { id: gameId },
      });
    }

    // BONUS MALUS

    const bonusMalus = [
      {
        name: 'Production +100%',
        type: 'production',
        label: 'interns_production_bonus',
        rate: 100,
        isBonus: true,
        eventId: 1,
        characterId: 1,
      },
      {
        name: 'Price -50%',
        type: 'price',
        label: 'interns_price_bonus',
        rate: -50,
        isBonus: true,
        eventId: 2,
        characterId: 1,
      },
      {
        name: 'Production -50%',
        type: 'production',
        label: 'developers_production_malus',
        rate: -50,
        isBonus: false,
        eventId: 2,
        characterId: 2,
      },
      {
        name: 'Price -50%',
        type: 'price',
        label: 'developers_price_bonus',
        rate: -50,
        isBonus: true,
        eventId: 3,
        characterId: 2,
      },
      {
        name: 'Production -50%',
        type: 'production',
        label: 'lead_developers_production_malus',
        rate: -50,
        isBonus: false,
        eventId: 3,
        characterId: 3,
      },
    ];

    for (const {
      name,
      type,
      label,
      rate,
      isBonus,
      eventId,
      characterId,
    } of bonusMalus) {
      await this.bonusMalusRepository.save({
        name,
        type,
        label,
        rate,
        isBonus,
        event: { id: eventId },
        character: { id: characterId },
      });
    }

    return 'OK';
  }
}
