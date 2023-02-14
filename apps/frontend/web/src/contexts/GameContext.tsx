import {
  GameResource,
  GameRoom,
  GameCharacter,
  GameEvent,
  ResourceUsed,
  ResourceProduced,
} from '@apps/backend-api';
import { createContext, useState, useMemo, ReactNode } from 'react';

const GameContext = createContext<{
  gameResourcesChar: GameResource[];
  setGameResourcesChar: (gameResourcesChar: GameResource[]) => void;
  gameRoom: GameRoom | null;
  setGameRoom: (gameRoom: GameRoom | null) => void;
  gameResources: GameResource[];
  setGameResources: (gameResourcesChar: GameResource[]) => void;
  gameCharacters: GameCharacter[];
  setGameCharacters: (gameCharacter: GameCharacter[]) => void;
  gameEvents: GameEvent[];
  setGameEvents: (gameEvents: GameEvent[]) => void;
  resourcesUsed: ResourceUsed[];
  setResourcesUsed: (resourceUsed: ResourceUsed[]) => void;
  resourcesProduced: ResourceProduced[];
  setResourcesProduced: (resourceProduced: ResourceProduced[]) => void;
  gameRooms: GameRoom[];
  setGameRooms: (gameRooms: GameRoom[]) => void;
}>({
  gameResourcesChar: [],
  setGameResourcesChar: () => {},
  gameRoom: null,
  setGameRoom: () => {},
  gameResources: [],
  setGameResources: () => {},
  gameCharacters: [],
  setGameCharacters: () => [],
  gameEvents: [],
  setGameEvents: () => [],
  resourcesUsed: [],
  setResourcesUsed: () => [],
  resourcesProduced: [],
  setResourcesProduced: () => [],
  gameRooms: [],
  setGameRooms: () => [],
});

const GameProvider = (props: { children: ReactNode }) => {
  const [gameResourcesChar, setGameResourcesChar] = useState<GameResource[]>(
    []
  );
  const [gameRoom, setGameRoom] = useState<GameRoom | null>(null);
  const [gameResources, setGameResources] = useState<GameResource[]>([]);
  const [gameCharacters, setGameCharacters] = useState<GameCharacter[]>([]);
  const [gameEvents, setGameEvents] = useState<GameEvent[]>([]);
  const [resourcesUsed, setResourcesUsed] = useState<ResourceUsed[]>([]);
  const [resourcesProduced, setResourcesProduced] = useState<
    ResourceProduced[]
  >([]);
  const [gameRooms, setGameRooms] = useState<GameRoom[]>([]);

  const value = useMemo(
    () => ({
      gameResourcesChar,
      setGameResourcesChar,
      gameRoom,
      setGameRoom,
      gameResources,
      setGameResources,
      gameCharacters,
      setGameCharacters,
      gameEvents,
      setGameEvents,
      resourcesUsed,
      setResourcesUsed,
      resourcesProduced,
      setResourcesProduced,
      gameRooms,
      setGameRooms,
    }),
    [
      gameResourcesChar,
      setGameResourcesChar,
      gameRoom,
      setGameRoom,
      gameResources,
      setGameResources,
      gameCharacters,
      setGameCharacters,
      gameEvents,
      setGameEvents,
      resourcesUsed,
      setResourcesUsed,
      resourcesProduced,
      setResourcesProduced,
      gameRooms,
      setGameRooms,
    ]
  );

  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  );
};

export default GameContext;
export { GameProvider };
