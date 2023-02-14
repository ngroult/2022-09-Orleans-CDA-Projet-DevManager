import Navbar from '../components/Navbar';
import NavbarRooms from '../components/NavbarRooms';
import ResourcesBar from '../components/ResourcesBar';
import { Box, Flex, VStack, Image } from '@chakra-ui/react';
import { useContext } from 'react';
import CharacterCard from '../components/CharacterCard';
import EventCard from '../components/EventCard';
import MoreAreaCard from '../components/MoreAreaCard';
import GameContext from '../contexts/GameContext';

const RoomPage = () => {
  const { gameRoom, gameEvents, gameCharacters } = useContext(GameContext);

  return (
    <>
      <Box height={'100vh'}>
        <ResourcesBar />
        <Navbar />
        <Flex
          pb="55px"
          pt={{ base: '50px', sm: '80px' }}
          px={{ base: '10px', sm: '80px' }}
          justifyContent="space-between"
        >
          <Box
            boxSize="100%"
            display={{ base: 'none', lg: 'flex', md: 'column', sm: 'none' }}
          >
            <Image src="/overview.jpg" alt="overview" />
          </Box>
          {gameRoom && gameEvents && gameCharacters && (
            <VStack pt="100px">
              {gameCharacters
                .filter(
                  (gameCharacter) =>
                    gameRoom.room.id === gameCharacter.character.room.id
                )
                .map((gameCharacter) => (
                  <CharacterCard
                    key={gameCharacter.character.id}
                    gameCharacter={gameCharacter}
                    gameRoom={gameRoom}
                  />
                ))}
              {gameEvents
                .filter(
                  (gameEvent) => gameRoom.room.id === gameEvent.event.room.id
                )
                .map((gameEvent) => (
                  <EventCard
                    key={gameEvent.id}
                    gameEvent={gameEvent}
                    gameRoom={gameRoom}
                  />
                ))}
              {gameRoom.room.name !== 'Break Room' && (
                <MoreAreaCard gameRoom={gameRoom} />
              )}
            </VStack>
          )}
        </Flex>
        <Box>
          <NavbarRooms />
        </Box>
      </Box>
    </>
  );
};

export default RoomPage;
