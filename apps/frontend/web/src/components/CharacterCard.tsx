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
  useToast,
} from '@chakra-ui/react';
import { GameCharacter, GameRoom } from '@apps/backend-api';
import CharacterModal from './popups/CharacterModal';
import BadgeResource from './BadgeResource';

function CharacterCard({
  gameCharacter,
  gameRoom,
}: {
  gameCharacter: GameCharacter;
  gameRoom: GameRoom;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const addCharacters = async () => {
    try {
      const res = await fetch(
        `/api/game-characters/add-by-id/${gameCharacter.id}`,
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
          title: `Hire ${gameCharacter.character.name}`,
          description: `Congratulations, you hired: ${gameCharacter.character.name}!`,
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
              {gameCharacter.character.resourcesProduced &&
                gameCharacter.character.resourcesUsed && (
                  <HStack>
                    {gameCharacter.character.resourcesProduced.map(
                      (resourceProduced) => (
                        <BadgeResource
                          key={resourceProduced.id}
                          color={'green.900'}
                          image={resourceProduced.resource.image}
                          alt={resourceProduced.resource.name}
                          text={resourceProduced.quantity}
                        />
                      )
                    )}

                    {gameCharacter.character.resourcesUsed.map(
                      (resourceUsed) => (
                        <BadgeResource
                          key={resourceUsed.id}
                          color={'red.900'}
                          image={resourceUsed.resource.image}
                          alt={resourceUsed.resource.name}
                          text={resourceUsed.quantity}
                        />
                      )
                    )}
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
                onClick={addCharacters}
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
        resourcesUsed={gameCharacter.character.resourcesUsed}
        resourcesProduced={gameCharacter.character.resourcesProduced}
      />
    </>
  );
}

export default CharacterCard;
