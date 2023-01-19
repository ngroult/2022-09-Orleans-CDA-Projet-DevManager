import { Game } from './game.entity';
import { Room } from './room.entity';
import { User } from './user.entity';
import { Character } from './character.entity';
import { GameResource } from './game-resource.entity';
import { GameRoom } from './game-room.entity';
import { GameCharacter } from './game-character.entity';
import { Event } from './event.entity';
import { IsBonusMalus } from './isBonusMalus.entity';
import { Resource } from './resource.entity';
import { GameEvent } from './game-event.entity';
import { ResourceUsed } from './resource-used.entity';
import { ResourceProduced } from './resource-produced.entity';

const entities = [
  Room,
  Game,
  Character,
  GameResource,
  User,
  Resource,
  GameRoom,
  GameCharacter,
  Event,
  IsBonusMalus,
  GameEvent,
  ResourceUsed,
  ResourceProduced,
];

export {
  Game,
  Room,
  User,
  Character,
  GameResource,
  Resource,
  GameRoom,
  GameCharacter,
  Event,
  IsBonusMalus,
  GameEvent,
  ResourceUsed,
  ResourceProduced,
};

export default entities;
