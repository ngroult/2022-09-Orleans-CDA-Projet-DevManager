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
        description: 'Man with black hair and red shirt',
        category: 'profile',
      },
      {
        name: 'man2',
        description: 'Man with beard and yellow tank top',
        category: 'profile',
      },
      {
        name: 'man3',
        description: 'Young man with black hair and white t-shirt',
        category: 'profile',
      },
      {
        name: 'man4',
        description: 'Man with glasses and red bow knot',
        category: 'profile',
      },
      {
        name: 'man5',
        description: 'Man with yellow hair and tall neck',
        category: 'profile',
      },
      {
        name: 'man6',
        description: 'Man dressed like Santa Klaus',
        category: 'profile',
      },
      {
        name: 'man7',
        description: 'Man looking like the singer Stromae',
        category: 'profile',
      },
      {
        name: 'man8',
        description: 'Man with a crocodile costume',
        category: 'profile',
      },
      {
        name: 'man9',
        description: 'Man dressed as a joker',
        category: 'profile',
      },
      {
        name: 'man10',
        description: 'Cyber-man without neck',
        category: 'profile',
      },
      {
        name: 'woman1',
        description: 'Woman with red hair and blood drops',
        category: 'profile',
      },
      {
        name: 'woman2',
        description: 'Young woman dressed like a japanese student',
        category: 'profile',
      },
      {
        name: 'woman3',
        description: 'Woman dressed like Cleopatra',
        category: 'profile',
      },
      {
        name: 'woman4',
        description: 'Woman with antennae on her head',
        category: 'profile',
      },
      {
        name: 'woman5',
        description: 'Woman dressed like an elf',
        category: 'profile',
      },
      {
        name: 'woman6',
        description: 'Woman with red hair and a cap',
        category: 'profile',
      },
      {
        name: 'woman7',
        description: 'Woman with red hair and a blue shirt',
        category: 'profile',
      },
      {
        name: 'woman8',
        description: 'Woman with black hair and an orange t-shirt',
        category: 'profile',
      },
      {
        name: 'woman9',
        description: 'Woman with black hair and pink jacket',
        category: 'profile',
      },
      {
        name: 'woman10',
        description: 'Woman with two buns and glasses',
        category: 'profile',
      },
      {
        name: 'company1',
        description: 'Ordinary house',
        category: 'company',
      },
      {
        name: 'company2',
        description: 'Warehouse',
        category: 'company',
      },
      {
        name: 'company3',
        description: 'Old skyscraper',
        category: 'company',
      },
      {
        name: 'company4',
        description: 'Hospital with towers',
        category: 'company',
      },
      {
        name: 'company5',
        description: 'Museum',
        category: 'company',
      },
      {
        name: 'company6',
        description: 'Lighthouse',
        category: 'company',
      },
      {
        name: 'company7',
        description: 'Yellow bank',
        category: 'company',
      },
      {
        name: 'company8',
        description: 'Castle',
        category: 'company',
      },
      {
        name: 'company9',
        description: 'Modern skyscraper',
        category: 'company',
      },
      {
        name: 'company10',
        description: 'Embassy',
        category: 'company',
      },
    ];

    const imagesPromises = [];
    for (const { name, description, category } of images) {
      imagesPromises.push(
        this.imagesRepository.save({
          name,
          description,
          category,
        }),
      );
    }

    const [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
      image19,
      image20,
      image21,
      image22,
      image23,
      image24,
      image25,
      image26,
      image27,
      image28,
      image29,
      image30,
    ] = await Promise.all(imagesPromises);

    // USER

    const users = [
      {
        username: 'John Doe',
        email: 'john.doe@email.com',
        password: 'password',
        imageId: image1.id,
      },
      {
        username: 'azerty',
        email: 'azerty@email.com',
        password: 'password',
        imageId: image2.id,
      },
      {
        username: 'qwerty',
        email: 'qwerty@email.com',
        password: 'password',
        imageId: image3.id,
      },
      {
        username: 'okerty',
        email: 'okerty@email.com',
        password: 'password',
        imageId: image4.id,
      },
      {
        username: 'imerty',
        email: 'imerty@email.com',
        password: 'password',
        imageId: image5.id,
      },
    ];

    const usersPromises = [];
    for (const { username, email, password, imageId } of users) {
      usersPromises.push(
        this.usersRepository.save({
          username,
          email,
          password: await argon2.hash(password),
          image: { id: imageId },
        }),
      );
    }

    const [user1, user2, user3, user4, user5] = await Promise.all(
      usersPromises,
    );

    // GAME

    const games = [
      {
        companyName: 'Twitter',
        ceo: 'Edith Piaf',
        location: 'Sydney, Australia',
        userId: 1,
        imageId: image21.id,
      },
      {
        companyName: 'AirBnB',
        ceo: 'Abraham Lincoln',
        location: 'Berlin, Germany',
        userId: 2,
        imageId: image22.id,
      },
      {
        companyName: 'Sodebo',
        ceo: 'Nelson Mandela',
        location: 'Houston, USA',
        userId: 3,
        imageId: image23.id,
      },
      {
        companyName: 'Thales',
        ceo: 'Marilyn Monroe',
        location: 'London, United-Kingdom',
        userId: 4,
        imageId: image24.id,
      },
      {
        companyName: 'Air France',
        ceo: 'Gérard Larcher',
        location: 'Paris, France',
        userId: 5,
        imageId: image25.id,
      },
    ];

    const gamesPromises = [];
    for (const { companyName, ceo, location, userId, imageId } of games) {
      gamesPromises.push(
        this.gamesRepository.save({
          companyName,
          ceo,
          location,
          user: { id: userId },
          image: { id: imageId },
        }),
      );
    }

    const [game1, game2, game3, game4, game5] = await Promise.all(
      gamesPromises,
    );

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

    const roomsPromises = [];
    for (const {
      name,
      description,
      image,
      label,
      color,
      price,
      isExpandable,
    } of rooms) {
      roomsPromises.push(
        this.roomsRepository.save({
          name,
          description,
          image,
          label,
          color,
          price,
          isExpandable,
        }),
      );
    }

    const [room1, room2, room3] = await Promise.all(roomsPromises);

    // CHARACTER

    const characters = [
      {
        name: 'Inter',
        description: 'Intern description',
        image: '/intern.png',
        price: 1,
        size: 1,
        roomId: room1.id,
      },
      {
        name: 'Developer',
        description: 'Developer description',
        image: '/developer.png',
        price: 100,
        size: 5,
        roomId: room1.id,
      },
      {
        name: 'Lead developer',
        description: 'Lead developer description',
        image: '/lead_dev.png',
        price: 1000,
        size: 15,
        roomId: room1.id,
      },
      {
        name: 'Recruiter',
        description: 'Recruiter description',
        image: '/recruiter.png',
        price: 5000,
        size: 5,
        roomId: room2.id,
      },
      {
        name: 'Salesman',
        description: 'Salesman description',
        image: '/salesman.png',
        price: 5000,
        size: 5,
        roomId: room2.id,
      },
      {
        name: 'Delivery man',
        description: 'Delivery man description',
        image: '/delivery_man.png',
        price: 7500,
        size: 5,
        roomId: room2.id,
      },
    ];

    const charactersPromises = [];
    for (const {
      name,
      description,
      image,
      price,
      size,
      roomId,
    } of characters) {
      charactersPromises.push(
        this.charactersRepository.save({
          name,
          description,
          image,
          price,
          size,
          room: { id: roomId },
        }),
      );
    }

    const [
      character1,
      character2,
      character3,
      character4,
      character5,
      character6,
    ] = await Promise.all(charactersPromises);

    // EVENT

    const events = [
      {
        name: 'Hackathon',
        description: 'Hackathon description',
        label: 'hackathon',
        image: '/hackathon.png',
        price: 1000,
        duration: 600,
        roomId: room3.id,
      },
      {
        name: 'Talent Week',
        description: 'Talent Week description',
        label: 'talent_week',
        image: '/talent_week.png',
        price: 10000,
        duration: 1800,
        roomId: room3.id,
      },
      {
        name: 'Job Dating',
        description: 'Job Dating description',
        label: 'job_dating',
        image: '/job_dating.png',
        price: 20000,
        duration: 1200,
        roomId: room3.id,
      },
    ];

    const eventsPromises = [];
    for (const {
      name,
      description,
      label,
      image,
      price,
      duration,
      roomId,
    } of events) {
      eventsPromises.push(
        this.eventsRepository.save({
          name,
          description,
          label,
          image,
          price,
          duration,
          room: { id: roomId },
        }),
      );
    }

    const [event1, event2, event3] = await Promise.all(eventsPromises);

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

    const resourcesPromises = [];
    for (const { name, description, image, color } of resources) {
      resourcesPromises.push(
        this.resourcesRepository.save({
          name,
          description,
          image,
          color,
        }),
      );
    }

    const [resource1, resource2, resource3, resource4, resource5] =
      await Promise.all(resourcesPromises);

    // GAME RESOURCE

    const gameResources = [
      {
        quantity: 1257,
        gameId: game1.id,
        resourceId: resource1.id,
      },
      {
        quantity: 1951,
        gameId: game1.id,
        resourceId: resource2.id,
      },
      {
        quantity: 2752,
        gameId: game1.id,
        resourceId: resource3.id,
      },
      {
        quantity: 275,
        gameId: game1.id,
        resourceId: resource4.id,
      },
      {
        quantity: 25,
        gameId: game1.id,
        resourceId: resource5.id,
      },
    ];

    const gameResourcesPromises = [];
    for (const { quantity, gameId, resourceId } of gameResources) {
      resourcesPromises.push(
        this.gameResourcesRepository.save({
          quantity,
          game: { id: gameId },
          resource: { id: resourceId },
        }),
      );
    }

    const [
      gameResource1,
      gameResource2,
      gameResource3,
      gameResource4,
      gameResource5,
    ] = await Promise.all(gameResourcesPromises);

    // RESOURCE USED

    const resourcesUsed = [
      {
        quantity: 12,
        resourceId: resource2.id, // Energy drinks
        characterId: character3.id, // Lead developers
      },
      {
        quantity: 1564,
        resourceId: resource3.id, // Coffees
        characterId: character2.id, // Developers
      },
      {
        quantity: 1564,
        resourceId: resource3.id, // Coffees
        characterId: character4.id, // Recruiters
      },
      {
        quantity: 1564,
        resourceId: resource3.id, // Coffees
        characterId: character5.id, // Salesman
      },
      {
        quantity: 1564,
        resourceId: resource4.id, // Contracts
        characterId: character3.id, // Lead developers
      },
      {
        quantity: 1564,
        resourceId: resource5.id, // Delivery orders
        characterId: character6.id, // Delivery man
      },
    ];

    const resourcesUsedPromises = [];
    for (const { quantity, resourceId, characterId } of resourcesUsed) {
      resourcesUsedPromises.push(
        this.resourcesUsedRepository.save({
          quantity,
          resource: { id: resourceId },
          character: { id: characterId },
        }),
      );
    }

    const [
      resourceUsed1,
      resourceUsed2,
      resourceUsed3,
      resourceUsed4,
      resourceUsed5,
    ] = await Promise.all(resourcesUsedPromises);

    // RESOURCE PRODUCED

    const resourcesProduced = [
      {
        quantity: 100,
        resourceId: resource1.id, // DevDollars
        characterId: character2.id, // Developers
      },
      {
        quantity: 100,
        resourceId: resource1.id, // DevDollars
        characterId: character2.id, // Lead developers
      },
      {
        quantity: 100,
        resourceId: resource2.id, // Energy drinks
        characterId: character6.id, // Delivery man
      },
      {
        quantity: 100,
        resourceId: resource3.id, // Coffees
        characterId: character1.id, // Interns
      },
      {
        quantity: 100,
        resourceId: resource4.id, // Contracts
        characterId: character5.id, // Salesman
      },
      {
        quantity: 100,
        resourceId: resource5.id, // Delivery orders
        characterId: character4.id, // Recruiters
      },
    ];

    const resourcesProducedPromises = [];
    for (const { quantity, resourceId, characterId } of resourcesProduced) {
      resourcesProducedPromises.push(
        this.resourcesProducedRepository.save({
          quantity,
          resource: { id: resourceId },
          character: { id: characterId },
        }),
      );
    }

    const [
      resourceProduced1,
      resourceProduced2,
      resourceProduced3,
      resourceProduced4,
      resourceProduced5,
      resourceProduced6,
    ] = await Promise.all(resourcesProducedPromises);

    // GAME ROOM

    const gameRooms = [
      {
        gameId: game1.id,
        roomId: room1.id,
        size: 40,
        totalSize: 110,
      },
      {
        gameId: game1.id,
        roomId: room2.id,
        size: 20,
        totalSize: 60,
      },
      {
        gameId: game1.id,
        roomId: room3.id,
        size: 51,
        totalSize: 80,
      },
    ];

    const gameRoomsPromises = [];
    for (const { gameId, roomId, size, totalSize } of gameRooms) {
      gameRoomsPromises.push(
        this.gameRoomsRepository.save({
          game: { id: gameId },
          room: { id: roomId },
          size,
          totalSize,
        }),
      );
    }

    const [gameRoom1, gameRoom2, gameRoom3] = await Promise.all(
      gameRoomsPromises,
    );

    // GAME CHARACTER

    const gameCharacters = [
      {
        gameId: game1.id,
        roomId: room1.id,
        characterId: character1.id,
        quantity: 2,
      },
      {
        gameId: game1.id,
        roomId: room1.id,
        characterId: character2.id,
        quantity: 3,
      },
      {
        gameId: game1.id,
        roomId: room1.id,
        characterId: character3.id,
        quantity: 3,
      },
      {
        gameId: game1.id,
        roomId: room2.id,
        characterId: character4.id,
        quantity: 3,
      },
      {
        gameId: game1.id,
        roomId: room1.id,
        characterId: character5.id,
        quantity: 3,
      },
      {
        gameId: game1.id,
        roomId: room1.id,
        characterId: character6.id,
        quantity: 3,
      },
    ];

    const gameCharactersPromises = [];
    for (const { gameId, roomId, characterId, quantity } of gameCharacters) {
      gameCharactersPromises.push(
        this.gameCharactersRepository.save({
          game: { id: gameId },
          room: { id: roomId },
          character: { id: characterId },
          quantity,
        }),
      );
    }

    const [
      gameCharacter1,
      gameCharacter2,
      gameCharacter3,
      gameCharacter4,
      gameCharacter5,
      gameCharacter6,
    ] = await Promise.all(gameCharactersPromises);

    // GAME EVENT

    const gameEvents = [
      {
        startDate: '1970-01-01 00:00',
        endDate: '1970-01-01 00:00',
        eventId: event1.id,
        gameId: game1.id,
      },
      {
        startDate: '1970-01-01 00:00',
        endDate: '1970-01-01 00:00',
        eventId: event2.id,
        gameId: game1.id,
      },
      {
        startDate: '1970-01-01 00:00',
        endDate: '1970-01-01 00:00',
        eventId: event3.id,
        gameId: game1.id,
      },
      {
        startDate: '1970-01-01 00:00',
        endDate: '1970-01-01 00:00',
        eventId: event1.id,
        gameId: game2.id,
      },
      {
        startDate: '1970-01-01 00:00',
        endDate: '1970-01-01 00:00',
        eventId: event2.id,
        gameId: game2.id,
      },
      {
        startDate: '1970-01-01 00:00',
        endDate: '1970-01-01 00:00',
        eventId: event3.id,
        gameId: game2.id,
      },
    ];

    const gameEventsPromises = [];
    for (const { startDate, endDate, eventId, gameId } of gameEvents) {
      gameEventsPromises.push(
        this.gameEventsRepository.save({
          startDate,
          endDate,
          event: { id: eventId },
          game: { id: gameId },
        }),
      );
    }

    const [
      gameEvent1,
      gameEvent2,
      gameEvent3,
      gameEvent4,
      gameEvent5,
      gameEvent6,
    ] = await Promise.all(gameEventsPromises);

    // BONUS MALUS

    const bonusMalus = [
      {
        name: 'Production +100%',
        type: 'production',
        label: 'interns_production_bonus',
        rate: 100,
        isBonus: true,
        eventId: event1.id,
        characterId: character1.id,
      },
      {
        name: 'Price -50%',
        type: 'price',
        label: 'interns_price_bonus',
        rate: -50,
        isBonus: true,
        eventId: event2.id,
        characterId: character1.id,
      },
      {
        name: 'Production -50%',
        type: 'production',
        label: 'developers_production_malus',
        rate: -50,
        isBonus: false,
        eventId: event2.id,
        characterId: character2.id,
      },
      {
        name: 'Price -50%',
        type: 'price',
        label: 'developers_price_bonus',
        rate: -50,
        isBonus: true,
        eventId: event3.id,
        characterId: character2.id,
      },
      {
        name: 'Production -50%',
        type: 'production',
        label: 'lead_developers_production_malus',
        rate: -50,
        isBonus: false,
        eventId: event3.id,
        characterId: character3.id,
      },
    ];

    const bonusMalusPromises = [];
    for (const {
      name,
      type,
      label,
      rate,
      isBonus,
      eventId,
      characterId,
    } of bonusMalus) {
      bonusMalusPromises.push(
        this.bonusMalusRepository.save({
          name,
          type,
          label,
          rate,
          isBonus,
          event: { id: eventId },
          character: { id: characterId },
        }),
      );
    }

    const [bonusMalus1, bonusMalus2, bonusMalus3, bonusMalus4, bonusMalus5] =
      await Promise.all(bonusMalusPromises);

    return 'OK';
  }
}
