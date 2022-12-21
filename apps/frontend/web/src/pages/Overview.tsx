import { Button, Box, Image, Text } from '@chakra-ui/react';

const Overview = () => {
  const handleBuyFirstRoom = () => {};

  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Text fontSize="xl">{'Overview'}</Text>
      <Image src="/overview.jpg" />
      <Button colorScheme="teal" size="lg" onClick={handleBuyFirstRoom}>
        {'Buy an OpenSpace'}
        <br />
        {'$1000'}
      </Button>
    </Box>
  );
};

export default Overview;
