import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

function CharacterCard() {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      bg="blue.100"
    >
      <Box borderRightRadius="2xl" w="100px" h="100px" bg="blue" shadow="2xl">
        <Image
          boxSize="80%"
          m="auto"
          mt="2.5"
          src="/lead_dev.png"
          alt="lead developer"
        />
      </Box>

      <CardBody>
        <Flex alignItems="center" w="full" justifyContent="space-between">
          <Box>
            <Heading size="md" mb="1">
              {'Lead Developer'}
            </Heading>
            <Badge borderRadius="full" px="2" colorScheme="teal">
              <Flex align="center">
                <Image src="/coffee.png" alt="coffee" boxSize="30px" p="1" />
                <Text>{'Coffee'}</Text>
              </Flex>
            </Badge>
            <Badge borderRadius="full" px="2" colorScheme="teal">
              <Flex align="center">
                <Image src="/coffee.png" alt="coffee" boxSize="30px" p="1" />
                <Text>{'Coffee'}</Text>
              </Flex>
            </Badge>
            <Badge borderRadius="full" px="2" colorScheme="red">
              <Flex align="center">
                <Image src="/coffee.png" alt="coffee" boxSize="30px" p="1" />
                <Text>{'Coffee'}</Text>
              </Flex>
            </Badge>
          </Box>
          <Box>
            <Badge
              fontSize="xl"
              borderRadius="full"
              px="2"
              colorScheme="yellow"
              marginEnd="5"
            >
              <Flex align="center">
                <Image src="/dollar.png" alt="dollar" boxSize="30px" p="1" />
                {'$100'}
              </Flex>
            </Badge>

            <Button variant="unstyled" bg="blue" boxShadow="2xl" size="lg">
              {'+ 1'}
            </Button>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default CharacterCard;
