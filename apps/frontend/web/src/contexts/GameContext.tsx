import { GameResource, GameRoom } from '@apps/backend-api';
import { createContext, useState, useMemo, ReactNode } from 'react';

const GameContext = createContext<{
  // user?: User | null;
  // setUser: (user: User | null) => void;
  // isLoadingUser: boolean;
  // setIsLoadingUser: (value: boolean) => void;
  // gameCharacters: GameCharacter[];
  // setGameCharacters: (gameCharacters: GameCharacter[]) => void;
  gameResources: GameResource[];
  setGameResources: (gameResources: GameResource[]) => void;
  gameRoom: GameRoom | null;
  setGameRoom: (gameRoom: GameRoom | null) => void;
}>({
  // user: null,
  // setUser: () => {},
  // isLoadingUser: true,
  // // setIsLoadingUser: () => {},
  // gameCharacters: [],
  // setGameCharacters: () => {},
  gameResources: [],
  setGameResources: () => {},
  gameRoom: null,
  setGameRoom: () => {},
});

const GameProvider = (props: { children: ReactNode }) => {
  const [gameResources, setGameResources] = useState<GameResource[]>([]);
  const [gameRoom, setGameRoom] = useState<GameRoom | null>(null);

  // const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);

  // useEffect(() => {
  //   if (user) {
  //     setIsLoadingUser(false);
  //   }
  // }, [user]);

  const value = useMemo(
    () => ({ gameResources, setGameResources, gameRoom, setGameRoom }),
    [gameResources, setGameResources, gameRoom, setGameRoom]
  );

  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  );
};

export default GameContext;
export { GameProvider };
