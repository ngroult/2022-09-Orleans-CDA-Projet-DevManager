import { useContext } from 'react';
import { Flex } from '@chakra-ui/react';
import GameContext from '../contexts/GameContext';
import NavbarTab from './NavbarTab';

const MobileNavbarRooms = () => {
  const { gameRooms } = useContext(GameContext);

  return (
    <Flex
      display={{ base: 'flex', sm: 'none' }}
      h="5rem"
      w="100%"
      justifyContent="space-evenly"
    >
      <NavbarTab
        type="bottom-navbar"
        path="/game/overview"
        text="Overview"
        src="/overview.png"
      />
      {gameRooms.map((gameRoom) => (
        <NavbarTab
          key={gameRoom.id}
          type="bottom-navbar"
          path={`/game/${gameRoom.room.label}`}
          text={gameRoom.room.name}
          src={gameRoom.room.image}
        />
      ))}
    </Flex>
  );
};

export default MobileNavbarRooms;
