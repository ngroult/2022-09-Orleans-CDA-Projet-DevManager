import { useState, useEffect } from 'react';
import {
  Badge,
  Button,
  HStack,
  Flex,
  Image,
  useDisclosure,
  Text,
  useToast,
} from '@chakra-ui/react';
import {
  BonusMalus,
  GameCharacter,
  GameEvent,
  GameRoom,
  ResourceProduced,
  ResourceUsed,
} from '@apps/backend-api';
import CharacterModal from './popups/CharacterModal';
import BadgeResource from './BadgeResource';

type RoomElement = {
  name: string;
  image: string;
  price: number;
  quantity?: number;
  size?: number;
  resourcesProduced?: ResourceProduced[];
  resourcesUsed?: ResourceUsed[];
  bonusMalus?: BonusMalus[];
};

function RoomElementCard({
  gameRoom,
  gameCharacter,
  gameEvent,
}: {
  gameRoom: GameRoom;
  gameCharacter?: GameCharacter;
  gameEvent?: GameEvent;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [roomElement, setRoomElement] = useState<RoomElement>();

  useEffect(() => {
    if (gameCharacter) {
      setRoomElement({
        name: gameCharacter?.character.name,
        image: gameCharacter?.character.image,
        price: gameCharacter?.character.price,
        quantity: gameCharacter?.quantity,
        size: gameCharacter?.character.size,
        resourcesProduced: gameCharacter?.character.resourcesProduced,
        resourcesUsed: gameCharacter?.character.resourcesUsed,
      });
    }
    if (gameEvent) {
      setRoomElement({
        name: gameEvent?.event.name,
        image: gameEvent?.event.image,
        price: gameEvent?.event.price,
        bonusMalus: gameEvent?.event.bonusMalus,
      });
    }
  }, []);

  const addCharacters = async () => {
    try {
      const res = await fetch(
        `/api/game-characters/add-by-id/${gameCharacter?.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            quantity: 1,
          }),
        }
      );
      const jsonResponse = await res.json();
      if (jsonResponse.success) {
        toast({
          title: `Hire ${gameCharacter?.character.name}`,
          description: `Congratulations, you hired: ${gameCharacter?.character.name}!`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Resource Used',
          description: `You don't have any resources or space in your ${gameRoom.room.name}!`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    } catch {}
  };

  return (
    <>
      <Flex
        overflow="hidden"
        bgColor={`${gameRoom.room.color}.500`}
        h="5rem"
        w="100%"
        my="0.5rem"
        borderRadius={{ base: '0', sm: '0 0.5rem 0.5rem 0' }}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          h="5rem"
          w="5rem"
          borderRadius="0 0.5rem 0.5rem 0"
          bgColor={`${gameRoom.room.color}.900`}
          onClick={onOpen}
          cursor="pointer"
        >
          <Image w="3.5rem" src={roomElement?.image} alt={roomElement?.name} />
        </Flex>

        <Flex
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          w="calc(100% - 1rem)"
          p="1rem"
        >
          <Flex flexDir="column" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex flexDir="row" alignItems="center" justifyContent="center">
                <Text whiteSpace="nowrap" fontWeight="black" fontSize="1.2rem">
                  {roomElement?.name}
                </Text>
                {roomElement?.quantity ? (
                  <Text ml="0.3rem">{`(${roomElement?.quantity})`}</Text>
                ) : null}
              </Flex>

              <Badge fontSize="xl" borderRadius="full" bgColor="gold.200">
                <Flex align="center">
                  <Image src="/dollar.png" alt="dollar" boxSize="30px" p="1" />
                  {roomElement?.price}
                </Flex>
              </Badge>
            </Flex>
            <Flex w="100%" justifyContent="space-between">
              {roomElement?.resourcesProduced && roomElement?.resourcesUsed && (
                <>
                  <HStack>
                    {roomElement?.resourcesProduced.map((resourceProduced) => (
                      <BadgeResource
                        key={resourceProduced.id}
                        color={'green.900'}
                        image={resourceProduced.resource.image}
                        alt={resourceProduced.resource.name}
                        text={resourceProduced.quantity}
                      />
                    ))}

                    {roomElement?.resourcesUsed.map((resourceUsed) => (
                      <BadgeResource
                        key={resourceUsed.id}
                        color={'red.900'}
                        image={resourceUsed.resource.image}
                        alt={resourceUsed.resource.name}
                        text={resourceUsed.quantity}
                      />
                    ))}
                  </HStack>

                  <Flex alignItems="center" justifyContent="center">
                    <Text>{roomElement?.size}</Text>
                    <Image h="1.5rem" w="1.5rem" ml="0.3rem" src="/area.png" />
                  </Flex>
                </>
              )}
            </Flex>
          </Flex>
          <Button
            bgColor={`${gameRoom.room.color}.900`}
            boxShadow="2xl"
            w="3rem"
            h="100%"
            color="white"
            ml="0.5rem"
            onClick={addCharacters}
          >
            {'+ 1'}
          </Button>
        </Flex>
      </Flex>

      <CharacterModal
        isOpen={isOpen}
        onClose={onClose}
        gameCharacter={gameCharacter}
        resourcesUsed={roomElement?.resourcesUsed}
        resourcesProduced={roomElement?.resourcesProduced}
      />
    </>
  );
}

export default RoomElementCard;
