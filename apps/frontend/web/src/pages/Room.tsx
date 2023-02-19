import { Box, Center, Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import GameContext from '../contexts/GameContext';
import RoomElementCard from '../components/RoomElementCard';
import GameFrame from '../components/GameFrame';

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
        bgPosition="top center"
        bgSize="cover"
      >
        <Center pl={'70px'}>
          <GameFrame />
        </Center>
      </Box>

      {gameRoom && gameEvents && gameCharacters && (
        <Flex
          flexDir="column"
          py="1rem"
          px={{ base: '0', sm: '1rem' }}
          bgColor={`${gameRoom.room.color}.200`}
          w="100%"
          maxW="40rem"
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
              />
            ))}
          {gameEvents
            .filter((gameEvent) => gameRoom.room.id === gameEvent.event.room.id)
            .map((gameEvent) => (
              <RoomElementCard key={gameEvent.id} gameEvent={gameEvent} />
            ))}
          {gameRoom.room.name !== 'Break Room' && <RoomElementCard />}
        </Flex>
      )}
    </Flex>
  );
};

export default RoomPage;
