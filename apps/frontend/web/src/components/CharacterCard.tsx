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
} from '@chakra-ui/react';
import {
  GameCharacter,
  Room,
  ResourceUsed,
  ResourceProduced,
} from '@apps/backend-api';
import { useState, useEffect } from 'react';
import CharacterModal from './popups/CharacterModal';
import BadgeResource from './BadgeResource';

function CharacterCard({
  gameCharacter,
  room,
}: {
  gameCharacter: GameCharacter;
  room: Room;
}) {
  const [resourcesUsed, setResourcesUsed] = useState<ResourceUsed[]>([]);
  const [resourcesProduced, setResourcesProduced] = useState<
    ResourceProduced[]
  >([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const abortController = new AbortController();

    const handleResourcesUsed = async () => {
      try {
        const res = await fetch(`/api/resourcesUsed`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setResourcesUsed(jsonResponse);
      } catch (e) {
        console.log('error handleResourcesUsed : ' + e);
      }
    };
    const handleResourcesProduced = async () => {
      try {
        const res = await fetch(`/api/resourcesProduced`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setResourcesProduced(jsonResponse);
      } catch (e) {
        console.log('error handleResourcesProduced : ' + e);
      }
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
        bg={`${room.color}.500`}
        w="100%"
      >
        <Box
          borderRightRadius="10px"
          boxSize="10%"
          bg={`${room.color}.900`}
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
              <Heading size="md" mt="1">
                {gameCharacter.character.name}
              </Heading>

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
              <Badge fontSize="xl" borderRadius="full" bgColor="gold.200">
                <Flex align="center">
                  <Image src="/dollar.png" alt="dollar" boxSize="30px" p="1" />
                  {gameCharacter.character.price}
                </Flex>
              </Badge>
              <Button
                bg={`${room.color}.900`}
                boxShadow="2xl"
                size="lg"
                color="white"
              >
                {'+ 1'}
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
