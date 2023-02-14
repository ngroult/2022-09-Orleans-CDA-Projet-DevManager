import {
  Badge,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Text,
  HStack,
} from '@chakra-ui/react';
import {
  GameCharacter,
  ResourceUsed,
  ResourceProduced,
} from '@apps/backend-api';
import BadgeResource from '../BadgeResource';

function CharacterModal({
  isOpen,
  onClose,
  gameCharacter,
  resourcesUsed,
  resourcesProduced,
}: {
  isOpen: boolean;
  onClose: () => void;
  gameCharacter: GameCharacter;
  resourcesUsed: ResourceUsed[];
  resourcesProduced: ResourceProduced[];
}) {
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalContent bg={`${gameCharacter.character.room.color}.200`}>
          <ModalCloseButton />
          <ModalBody pt={'10'} px={'0'}>
            <Box h={'calc(100vh-7rem)'}>
              <Center>
                <Image
                  boxSize="20%"
                  m="auto"
                  mt="2.5"
                  src={gameCharacter.character.image}
                  alt={gameCharacter.character.name}
                />
              </Center>
              <Center>
                <Heading size="md" py={'10'}>
                  {gameCharacter.character.name}
                </Heading>
              </Center>
              <Text textAlign={'center'}>
                {gameCharacter.character.description}
              </Text>
              <Center>
                <Flex py={'10'}>
                  <Text mr={'3'} fontSize={'lg'} as="b">
                    {'Current price:'}
                  </Text>
                  <Badge borderRadius="full" bgColor="gold.200">
                    <Flex align="center">
                      <Image
                        src="/dollar.png"
                        alt="dollar"
                        boxSize="30px"
                        p="1"
                      />
                      <Text fontSize={'lg'} as="b">
                        {`$ ${gameCharacter.character.price}`}
                      </Text>
                    </Flex>
                  </Badge>
                  <Text>{'/ unit'}</Text>
                </Flex>
              </Center>
              <Center>
                <Text fontSize={'lg'} as="b">
                  {'Ressource produced and used:'}
                </Text>
              </Center>
              <Center>
                <Box mb="20%">
                  {resourcesUsed && resourcesProduced ? (
                    <HStack>
                      {resourcesProduced.map((resourceProduced) => (
                        <BadgeResource
                          key={resourceProduced.id}
                          color={'green.900'}
                          image={resourceProduced.resource.image}
                          alt={resourceProduced.resource.name}
                          text={resourceProduced.quantity}
                        />
                      ))}

                      {resourcesUsed.map((resourceUsed) => (
                        <BadgeResource
                          key={resourceUsed.id}
                          color={'red.900'}
                          image={resourceUsed.resource.image}
                          alt={resourceUsed.resource.name}
                          text={resourceUsed.quantity}
                        />
                      ))}
                    </HStack>
                  ) : (
                    <></>
                  )}
                </Box>
              </Center>
            </Box>
            <Box pos={'absolute'} bottom={'0'} w={'100%'}>
              <Box
                h={'4rem'}
                bg={`${gameCharacter.character.room.color}.300`}
              ></Box>
              <Box
                h={'2rem'}
                bg={`${gameCharacter.character.room.color}.500`}
              ></Box>
              <Box
                h={'1rem'}
                bg={`${gameCharacter.character.room.color}.900`}
              ></Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default CharacterModal;
