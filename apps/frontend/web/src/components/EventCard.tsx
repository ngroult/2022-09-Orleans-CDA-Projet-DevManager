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
import { Room, Event, BonusMalus } from '@apps/backend-api';
import { useState, useEffect } from 'react';
import EventModal from './popups/EventModal';
import BadgeResource from './BadgeResource';

function EventCard({ room, event }: { room: Room; event: Event }) {
  const [bonusMalus, setBonusMalus] = useState<BonusMalus[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const abortController = new AbortController();

    const handleBonusMalus = async () => {
      try {
        const res = await fetch(`/api/is-bonus-malus`, {
          method: 'GET',
          signal: abortController.signal,
        });
        const jsonResponse = await res.json();
        setBonusMalus(jsonResponse);
      } catch (e) {
        console.log('error handleIsBonusMalus : ' + e);
      }
    };
    handleBonusMalus();

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
          <Image m="auto" mt="2.5" src={event.image} alt={event.name} />
        </Box>

        <CardBody>
          <Flex alignItems="center" w="full" justifyContent="space-between">
            <Box>
              <Heading size="md" mt="1">
                {event.name}
              </Heading>

              {bonusMalus && (
                <HStack>
                  {bonusMalus
                    .filter((bonMal) => bonMal.event.id === event.id)
                    .map((bonMal) => (
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
                  {event.price}
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
        event={event}
        bonusMalus={bonusMalus}
      />
    </>
  );
}

export default EventCard;
