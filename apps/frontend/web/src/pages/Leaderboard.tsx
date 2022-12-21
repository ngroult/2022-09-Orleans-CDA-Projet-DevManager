import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const Leaderboard = () => {
  fetch('api/games', { method: 'GET' })
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
    });
  fetch('api/users', { method: 'GET' })
    .then((data1) => data1.json())
    .then((data1) => {
      console.log(data1);
    });
  return (
    <Box>
      <Center>
        <Heading as="h1" size="2xl" m="20" color="#797AA6">
          Leaderboard
        </Heading>
      </Center>
      <Center>
        <Box>
          <Flex>
            <Image
              boxSize="75"
              src="/company8.png"
              alt="Your company image"
            ></Image>
            <Flex>
              <Box ml="8">
                <Heading as="h2" size="l">
                  <Flex>
                    <Image src="/badge.png" boxSize="5" mr="2"></Image>
                    Your rank
                  </Flex>
                </Heading>
                <p>2500 / 1 500 000</p>
                <p>$ 1 030 spent</p>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Center>
      <Center>
        <Divider mt="5" w="60"></Divider>
      </Center>
      <Center>
        <Heading as="h2" size="l" mt="10">
          Mondial rank
        </Heading>
      </Center>
      <TableContainer>
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              <Th>N°</Th>
              <Th>Player</Th>
              <Th>Company</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Image src="/medal_gold.png" boxSize="7"></Image>
              </Td>
              <Td>Ydrogen</Td>
              <Td>RazrNet</Td>
            </Tr>
            <Tr>
              <Td>
                <Image src="/medal_silver.png" boxSize="7"></Image>
              </Td>
              <Td>Hérve Tournois</Td>
              <Td>HervéTournoi</Td>
            </Tr>
            <Tr>
              <Td>
                <Image src="/medal_bronze.png" boxSize="7"></Image>
              </Td>
              <Td>Mamouth</Td>
              <Td>Mamouth</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Leaderboard;
