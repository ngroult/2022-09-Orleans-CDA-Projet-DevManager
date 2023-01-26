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
  Text,
} from '@chakra-ui/react';
import {
  Character,
  Room,
  ResourceUsed,
  ResourceProduced,
  GameEvent,
} from '@apps/backend-api';
import { useState, useEffect } from 'react';

function CharacterCard({
  character,
  room,
}: {
  character: Character;
  room: Room;
}) {
  const [resourcesUsed, setResourcesUsed] = useState<ResourceUsed[]>([]);
  const [resourcesProduced, setResourcesProduced] = useState<
    ResourceProduced[]
  >([]);

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
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      bg={`${room.color}.500`}
      w="100%"
    >
      <Box
        borderRightRadius="10px"
        w="100px"
        h="100px"
        bg={`${room.color}.900`}
        shadow="2xl"
      >
        <Image
          boxSize="80%"
          m="auto"
          mt="2.5"
          src={character.image}
          alt={character.name}
        />
      </Box>

      <CardBody>
        <Flex alignItems="center" w="full" justifyContent="space-between">
          <Box>
            <>
              <Heading size="md" mt="1">
                {character.name}
              </Heading>

              {resourcesUsed && resourcesProduced ? (
                <HStack>
                  {resourcesProduced
                    .filter(
                      (resourceProduced) =>
                        resourceProduced.character.id === character.id
                    )
                    .map((resourceProduced) => (
                      <Badge
                        borderRadius="5px"
                        px="2"
                        bgColor="green.900"
                        key={resourceProduced.id}
                      >
                        <Flex align="center">
                          <Image
                            src={resourceProduced.resource.image}
                            alt={resourceProduced.resource.name}
                            boxSize="30px"
                            p="1"
                          />
                          <Text>{resourceProduced.quantity}</Text>
                        </Flex>
                      </Badge>
                    ))}

                  {resourcesUsed
                    .filter(
                      (resourceUsed) =>
                        resourceUsed.character.id === character.id
                    )
                    .map((resourceUsed) => (
                      <Badge
                        borderRadius="5px"
                        px="2"
                        bgColor="red.900"
                        key={resourceUsed.id}
                      >
                        <Flex align="center">
                          <Image
                            src={resourceUsed.resource.image}
                            alt={resourceUsed.resource.name}
                            boxSize="30px"
                            p="1"
                          />
                          <Text>{resourceUsed.quantity}</Text>
                        </Flex>
                      </Badge>
                    ))}
                </HStack>
              ) : (
                <></>
              )}
            </>
          </Box>
          <Box>
            <Badge
              fontSize="xl"
              borderRadius="full"
              px="2"
              bgColor="gold.200"
              mx="5"
            >
              <Flex align="center">
                <Image src="/dollar.png" alt="dollar" boxSize="30px" p="1" />
                {character.price}
              </Flex>
            </Badge>

            <Button
              // variant="unstyled"
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
  );
}

export default CharacterCard;
