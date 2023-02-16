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
    <Box height={'100vh'}>
      <Navbar />
      <ResourcesBar />
      <Flex
        h="100vh"
        pt="5rem"
        mx={{ base: '10px', sm: '5rem' }}
        justifyContent="space-between"
      >
        <Box
          boxSize="100%"
          display={{ base: 'none', lg: 'flex', md: 'column', sm: 'none' }}
          bgImage="/placeholder.png"
          bgPosition="top center"
          bgSize="cover"
        />
        {gameRoom && gameEvents && gameCharacters && (
          <VStack bgColor={`${gameRoom.room.color}.200`}>
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
      <NavbarRooms />
    </Box>
  );
};

export default RoomPage;
