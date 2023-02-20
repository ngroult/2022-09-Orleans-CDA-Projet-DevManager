import { Badge, Box, Flex, Image, Text, useToast } from '@chakra-ui/react';
import { useContext } from 'react';
import GameContext from '../contexts/GameContext';
import RoomElementCard from '../components/RoomElementCard';

const RoomPage = () => {
  const { gameRoom, gameEvents, gameCharacters } = useContext(GameContext);
  const toast = useToast();

  const buyRoom = async () => {
    try {
      const res = await fetch(`/api/game-rooms/up-total-size/${gameRoom?.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          totalSize: 100,
        }),
      });
      const jsonResponse = await res.json();
      if (jsonResponse.success) {
        toast({
          title: `Up ${gameRoom?.room.name} total size`,
          description: `Congratulations, your ${gameRoom?.room.name} is growing up!`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: `Up ${gameRoom?.room.name} total size`,
          description: `You don't have enough devDollars!`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    } catch {}
  };

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
          w="100%"
          maxW="40rem"
        >
          {gameRoom.totalSize === 0 ? (
            <Flex
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              bgColor={`${gameRoom.room.color}.900`}
              borderRadius="10rem"
              py="0.5rem"
              cursor="pointer"
              w="fit-content"
              minW="15rem"
              mx="auto"
              onClick={buyRoom}
            >
              <Text color="#fff" fontSize="1.1rem" fontWeight="bold">
                {'Buy this room for'}
              </Text>
              <Badge
                fontSize="xl"
                borderRadius="full"
                bgColor="gold.200"
                display="flex"
                flexDir="row"
              >
                <Image src="/dollar.png" alt="dollar" boxSize="30px" p="1" />
                <Text>{gameRoom.room.price}</Text>
              </Badge>
            </Flex>
          ) : null}

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
