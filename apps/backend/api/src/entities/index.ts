import { Game } from './game.entity';
import { Room } from './room.entity';
import { User } from './user.entity';
import { Character } from './character.entity';
import { GameResource } from './game-resource.entity';
import { Resource } from './resource.entity';
import { Image } from './image.entity';

const entities = [Room, Game, Character, GameResource, User, Resource, Image];

export { Game, Room, User, Character, GameResource, Resource, Image };

export default entities;
