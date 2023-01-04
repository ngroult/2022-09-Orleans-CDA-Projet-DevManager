import { Character } from '../app/characters/entities/character.entity';
import { Game } from '../app/games/entities/game.entity';
import { User } from '../app/users/entities/user.entity';
import { Room } from '../app/rooms/entities/room.entity';
import { Resource } from '../app/resources/entities/resource.entity';
import { GameResource } from '../app/game-resources/entities/game-resource.entity';

export const entities = [Character, Game, User, Room, Resource, GameResource];
