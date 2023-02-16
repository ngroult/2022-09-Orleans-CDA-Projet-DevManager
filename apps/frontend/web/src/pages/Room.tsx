import { Box, Flex, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import CharacterCard from '../components/RoomElementCard';
import EventCard from '../components/EventCard';
import MoreAreaCard from '../components/MoreAreaCard';
import GameContext from '../contexts/GameContext';
import RoomElementCard from '../components/RoomElementCard';

const RoomPage = () => {
  const { gameRoom, gameEvents, gameCharacters } = useContext(GameContext);

  return (
    <Flex
      h={{ base: 'calc(100vh - 5rem)', sm: '100vh' }}
      pt={{ base: '6rem', sm: '5rem' }}
      mx={{ base: '0', sm: '5rem' }}
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
        <Flex
          flexDir="column"
          py="1rem"
          px={{ base: '0', sm: '1rem' }}
          bgColor={`${gameRoom.room.color}.200`}
        >
          {gameCharacters
            .filter(
              (gameCharacter) =>
                gameRoom.room.id === gameCharacter.character.room.id
            )
            .map((gameCharacter) => (
              <RoomElementCard
                key={gameCharacter.character.id}
                gameCharacter={gameCharacter}
                gameRoom={gameRoom}
              />
            ))}
          {gameEvents
            .filter((gameEvent) => gameRoom.room.id === gameEvent.event.room.id)
            .map((gameEvent) => (
              <RoomElementCard
                key={gameEvent.id}
                gameEvent={gameEvent}
                gameRoom={gameRoom}
              />
            ))}
          {gameRoom.room.name !== 'Break Room' && (
            <MoreAreaCard gameRoom={gameRoom} />
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default RoomPage;
