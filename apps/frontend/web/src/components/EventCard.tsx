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
import { GameRoom, GameEvent } from '@apps/backend-api';
import EventModal from './popups/EventModal';
import BadgeResource from './BadgeResource';

function EventCard({
  gameRoom,
  gameEvent,
}: {
  gameRoom: GameRoom;
  gameEvent: GameEvent;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            src={gameEvent.event.image}
            alt={gameEvent.event.name}
          />
        </Box>

        <CardBody>
          <Flex alignItems="center" w="full" justifyContent="space-between">
            <Box>
              <Heading size="md" mt="1">
                {gameEvent.event.name}
              </Heading>

              {gameEvent.event.bonusMalus && (
                <HStack>
                  {gameEvent.event.bonusMalus.map((bonMal) => (
                    <BadgeResource
                      key={bonMal.id}
                      color={bonMal.isBonus ? `green.900` : `red.900`}
                      image={bonMal.character.image}
                      alt={bonMal.label}
                      text={bonMal.name}
                    />
                  ))}
                </HStack>
              )}
            </Box>
            <Box>
              <Badge fontSize="xl" borderRadius="full" bgColor="gold.200">
                <Flex align="center">
                  <Image src="/dollar.png" alt="dollar" boxSize="30px" p="1" />
                  {gameEvent.event.price}
                </Flex>
              </Badge>
              <Button
                bg={`${gameRoom.room.color}.900`}
                boxShadow="2xl"
                size="lg"
                color="white"
                ml="5"
              >
                {'+ 1'}
              </Button>
            </Box>
          </Flex>
        </CardBody>
      </Card>
      <EventModal
        isOpen={isOpen}
        onClose={onClose}
        gameEvent={gameEvent}
        bonusMalus={gameEvent.event.bonusMalus}
      />
    </>
  );
}

export default EventCard;