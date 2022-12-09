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
      <Box>
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />
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

        <Button variant="solid" colorScheme="blue">
          + 1
        </Button>
      </HStack>
    </Card>
  );
}

export default CharacterCard;
