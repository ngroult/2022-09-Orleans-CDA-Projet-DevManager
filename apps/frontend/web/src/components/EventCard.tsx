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
  useDisclosure,
} from '@chakra-ui/react';
import { Room, GameEvent, IsBonusMalus } from '@apps/backend-api';
import { useState, useEffect } from 'react';
import EventModal from './popups/EventModal';
import BadgeResource from './BadgeResource';

function EventCard({ room, gameEvent }: { room: Room; gameEvent: GameEvent }) {
  const [isBonusMalus, setIsBonusMalus] = useState<IsBonusMalus[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const abortController = new AbortController();

    const handleIsBonusMalus = async () => {
      try {
        const res = await fetch(`/api/is-bonus-malus`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        console.log(jsonResponse);
        setIsBonusMalus(jsonResponse);
      } catch (e) {
        console.log('error handleIsBonusMalus : ' + e);
      }
    };
    handleIsBonusMalus();

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
            src={gameEvent.event.image}
            alt={gameEvent.event.name}
          />
        </Box>

        <CardBody>
          <Flex alignItems="center" w="full" justifyContent="space-between">
            <Box>
              <>
                <Heading size="md" mt="1">
                  {gameEvent.event.name}
                </Heading>

                {isBonusMalus ? (
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
                ) : (
                  <></>
                )}
              </>
            </Box>
            <Box>
              <Badge fontSize="xl" borderRadius="full" bgColor="gold.200">
                <Flex align="center">
                  <Image src="/dollar.png" alt="dollar" boxSize="30px" p="1" />
                  {gameEvent.event.price}
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
      <EventModal
        isOpen={isOpen}
        onClose={onClose}
        gameEvent={gameEvent}
        isBonusMalus={isBonusMalus}
      />
    </>
  );
}

export default EventCard;
