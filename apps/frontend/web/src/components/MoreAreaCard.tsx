import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from '@chakra-ui/react';
import { GameRoom } from '@apps/backend-api';

function MoreAreaCard({ gameRoom }: { gameRoom: GameRoom }) {
  const toast = useToast();
  const addTotalSize = 10;

  const upTotalSize = async () => {
    try {
      const res = await fetch(`/api/game-rooms/up-total-size/${gameRoom.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          totalSize: addTotalSize,
        }),
      });
      const jsonResponse = await res.json();
      if (jsonResponse.success) {
        toast({
          title: `Up ${gameRoom.room.name} total size`,
          description: `Congratulations, your ${gameRoom.room.name} is growing up!`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: `Up ${gameRoom.room.name} total size`,
          description: `You don't have enough devDollars!`,
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
        >
          <Image m="auto" mt="2.5" src="/more_area.png" alt="More Area" />
        </Box>

        <CardBody>
          <Flex alignItems="center" w="full" justifyContent="space-between">
            <Box>
              <Heading size="md" mt="1">
                {'More Area'}
              </Heading>
            </Box>
            <Box>
              <Badge fontSize="xl" borderRadius="full" bgColor="gold.200">
                <Flex align="center">
                  <Image src="/dollar.png" alt="dollar" boxSize="30px" p="1" />
                  <Text>{gameRoom.room.price}</Text>
                </Flex>
              </Badge>
              <Button
                bg={`${gameRoom.room.color}.900`}
                boxShadow="2xl"
                size="lg"
                color="white"
                ml="5"
                onClick={upTotalSize}
              >
                {`+ ${addTotalSize}`}
              </Button>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
}

export default MoreAreaCard;
