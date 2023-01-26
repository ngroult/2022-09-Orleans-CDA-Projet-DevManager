import { GameEvent, IsBonusMalus } from '@apps/backend-api';
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
import BadgeResource from '../BadgeResource';

function EventModal({
  isOpen,
  onClose,
  gameEvent,
  isBonusMalus,
}: {
  isOpen: boolean;
  onClose: () => void;
  gameEvent: GameEvent;
  isBonusMalus: IsBonusMalus[];
}) {
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalContent bg={`${gameEvent.event.room.color}.200`}>
          <ModalCloseButton />
          <ModalBody pt={'10'} px={'0'}>
            <Box h={'calc(100vh-7rem)'}>
              <Center>
                <Image
                  boxSize="20%"
                  m="auto"
                  mt="2.5"
                  src={gameEvent.event.image}
                  alt={gameEvent.event.label}
                />
              </Center>
              <Center>
                <Heading size="md" py={'10'}>
                  {gameEvent.event.name}
                </Heading>
              </Center>
              <Text textAlign={'center'}>{gameEvent.event.description}</Text>
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
                        {`$ ${gameEvent.event.price}`}
                      </Text>
                    </Flex>
                  </Badge>
                  <Text>{'/ event'}</Text>
                </Flex>
              </Center>
              <Center>
                <Text fontSize={'lg'} as="b">
                  {'Ressource produced and used:'}
                </Text>
              </Center>
              <Center>
                <Box mb="30%">
                  {isBonusMalus && (
                    <HStack>
                      {isBonusMalus
                        .filter((isBM) => isBM.event.id === gameEvent.event.id)
                        .map((isBM) => (
                          <BadgeResource
                            key={isBM.id}
                            color={isBM.isBonus ? `green.900` : `red.900`}
                            image={isBM.character.image}
                            alt={isBM.label}
                            text={isBM.name}
                          />
                        ))}
                    </HStack>
                  )}
                </Box>
              </Center>
            </Box>
            <Box pos={'absolute'} bottom={'0'} w={'100%'}>
              <Box h={'4rem'} bg={`${gameEvent.event.room.color}.300`}></Box>
              <Box h={'2rem'} bg={`${gameEvent.event.room.color}.500`}></Box>
              <Box h={'1rem'} bg={`${gameEvent.event.room.color}.900`}></Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default EventModal;
