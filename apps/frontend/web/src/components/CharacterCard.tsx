import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

function CharacterCard() {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Box borderRightRadius="2xl" w="100px" h="100px" bg="blue" shadow="2xl">

      </Box>

      <HStack>
        <CardBody>
          <Heading size="md">The perfect latte</Heading>

          <Badge borderRadius="full" px="2" colorScheme="teal">
            ressource 1
          </Badge>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            ressource 2
          </Badge>
        </CardBody>
        <Badge borderRadius="full" px="2" colorScheme="yellow">
          100$
        </Badge>

        <Button variant="solid" colorScheme="blue" shadow="2xl">
          + 1
        </Button>
      </HStack>
    </Card>
  );
}

export default CharacterCard;
