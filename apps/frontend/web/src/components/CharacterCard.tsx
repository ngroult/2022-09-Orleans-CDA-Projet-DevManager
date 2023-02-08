import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Flex,
  Heading,
  Image,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import {
  GameCharacter,
  GameRoom,
  ResourceUsed,
  ResourceProduced,
  GameResource,
} from '@apps/backend-api';
import { useState, useEffect } from 'react';
import CharacterModal from './popups/CharacterModal';
import BadgeResource from './BadgeResource';
import UserContactFiller from './UserContactFiller';

function CharacterCard({
  gameCharacter,
  gameRoom,
  quantityAddCharacters,
  gameResources,
}: {
  gameCharacter: GameCharacter;
  gameRoom: GameRoom;
  quantityAddCharacters: number;
  gameResources: GameResource[];
}) {
  const [resourcesUsed, setResourcesUsed] = useState<ResourceUsed[]>([]);
  const [resourcesProduced, setResourcesProduced] = useState<
    ResourceProduced[]
  >([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const newQuantity = () => {
    return (gameCharacter.quantity += quantityAddCharacters);
  };

  const findResourcesUsed = () => {
    let res: ResourceUsed[] = [];
    for (let i = 0; i < resourcesUsed.length; i++) {
      if (gameCharacter.character.id === resourcesUsed[i].character.id) {
        res.push(resourcesUsed[i]);
      } else {
      }
    }
    return res;
  };

  const findGameResourceCharacter = () => {
    let resUsed = findResourcesUsed();
    let gameRes: GameResource[] = [];
    if (resUsed.length >= 1) {
      for (let i = 0; i < resUsed.length; i++) {
        for (let j = 0; j < gameResources.length; j++) {
          if (gameCharacter.character.id === resUsed[i].character.id) {
            if (resUsed[i].resource.id === gameResources[j].resource.id) {
              gameRes.push(gameResources[j]);
            }
          }
        }
      }
    }
    return gameRes;
  };

  const verifyResourcesUsed = () => {
    const resUsed = findResourcesUsed();
    const gameRes = findGameResourceCharacter();
    if (resUsed.length === 0 && gameRes.length === 0) {
      return true;
    }
    if (resUsed.length === 1 && gameRes.length === 1) {
      if (resUsed[0].quantity > gameRes[0].quantity) {
        return false;
      } else {
        return true;
      }
    } else {
      for (let i = 0; i < resUsed.length; i++) {
        for (let j = 0; j < gameRes.length; j++) {
          if (gameCharacter.character.id === resUsed[i].character.id) {
            if (resUsed[i].resource.id === gameRes[j].resource.id) {
              if (resUsed[i].quantity > gameRes[j].quantity) {
                return false;
              }
            }
          }
        }
      }
    }
    return true;
  };

  let remainingDevDollars: number[] = [];
  const verifyDevDollars = () => {
    for (let j = 0; j < gameResources.length; j++) {
      if (gameResources[j].resource.name === 'DevDollars') {
        if (gameCharacter.character.price <= gameResources[j].quantity) {
          remainingDevDollars.push(j + 1);
          remainingDevDollars.push(
            gameResources[j].quantity - gameCharacter.character.price
          );
          return true;
        }
      }
    }
  };

  const countRemainingResources = async () => {
    try {
      const resUsed = findResourcesUsed();
      const gameRes = findGameResourceCharacter();
      await fetch(`/api/game-resources/${remainingDevDollars[0]}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: remainingDevDollars[1] }),
      });
      if (resUsed.length >= 1 && gameRes.length >= 1) {
        for (let i = 0; i < resUsed.length; i++) {
          for (let j = 0; j < gameRes.length; j++) {
            await fetch(`/api/game-resources/${gameRes[i].id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                quantity: gameRes[j].quantity - resUsed[i].quantity,
              }),
            });
          }
        }
      }
    } catch (err) {}
  };

  const addCharacter = async () => {
    try {
      if (verifyResourcesUsed() && verifyDevDollars()) {
        await fetch(`/api/game-characters/${gameCharacter.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity: newQuantity() }),
        });
        countRemainingResources();
      } else {
        console.log("it's sad");
        //TODO envoyer des toasts
      }
    } catch (err) {}
  };

  useEffect(() => {
    const abortController = new AbortController();

    const handleResourcesUsed = async () => {
      try {
        const res = await fetch(`/api/resources-used`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setResourcesUsed(jsonResponse);
      } catch {}
    };
    const handleResourcesProduced = async () => {
      try {
        const res = await fetch(`/api/resources-produced`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setResourcesProduced(jsonResponse);
      } catch {}
    };

    handleResourcesUsed();
    handleResourcesProduced();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        bg={`${gameRoom.room.color}.500`}
        w="100%"
      >
        <Box
          borderRightRadius="10px"
          boxSize="10%"
          bg={`${gameRoom.room.color}.900`}
          shadow="2xl"
          onClick={onOpen}
        >
          <Image
            m="auto"
            mt="2.5"
            src={gameCharacter.character.image}
            alt={gameCharacter.character.name}
          />
        </Box>

        <CardBody>
          <Flex alignItems="center" w="full" justifyContent="space-between">
            <Box>
              <HStack>
                <Heading size="md" mt="1">
                  {gameCharacter.character.name}
                </Heading>
                <Text>{gameCharacter.quantity}</Text>
              </HStack>
              {resourcesUsed && resourcesProduced && (
                <HStack>
                  {resourcesProduced
                    .filter(
                      (resourceProduced) =>
                        resourceProduced.character.id ===
                        gameCharacter.character.id
                    )
                    .map((resourceProduced) => (
                      <BadgeResource
                        key={resourceProduced.id}
                        color={'green.900'}
                        image={resourceProduced.resource.image}
                        alt={resourceProduced.resource.name}
                        text={resourceProduced.quantity}
                      />
                    ))}

                  {resourcesUsed
                    .filter(
                      (resourceUsed) =>
                        resourceUsed.character.id === gameCharacter.character.id
                    )
                    .map((resourceUsed) => (
                      <BadgeResource
                        key={resourceUsed.id}
                        color={'red.900'}
                        image={resourceUsed.resource.image}
                        alt={resourceUsed.resource.name}
                        text={resourceUsed.quantity}
                      />
                    ))}
                </HStack>
              )}
            </Box>
            <Box>
              <HStack>
                <Text>{gameCharacter.character.size}</Text>
                <Box boxSize="20px">
                  <Image src="/area.png" />
                </Box>
              </HStack>
            </Box>
            <Box>
              <Badge fontSize="xl" borderRadius="full" bgColor="gold.200">
                <Flex align="center">
                  <Image src="/dollar.png" alt="dollar" boxSize="30px" p="1" />
                  {gameCharacter.character.price}
                </Flex>
              </Badge>
              <Button
                bg={`${gameRoom.room.color}.900`}
                boxShadow="2xl"
                size="lg"
                color="white"
                ml="5"
                onClick={addCharacter}
              >
                {`+ ${quantityAddCharacters}`}
              </Button>
            </Box>
          </Flex>
        </CardBody>
      </Card>
      <CharacterModal
        isOpen={isOpen}
        onClose={onClose}
        gameCharacter={gameCharacter}
        resourcesUsed={resourcesUsed}
        resourcesProduced={resourcesProduced}
      />
    </>
  );
}

export default CharacterCard;
