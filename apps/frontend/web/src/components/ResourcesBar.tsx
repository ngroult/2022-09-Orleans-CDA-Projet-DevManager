import { Box, Flex, HStack, Image, Spacer, VStack } from '@chakra-ui/react';

const ResourcesBar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" px="80px">
      <HStack>
        <Box boxSize="30px">
          <Image src="/company4.png" placeholder="my_company" />
        </Box>
        <Box>My Company</Box>
      </HStack>
      <Spacer />
      <VStack>
        <Box>Remaining</Box>
        <HStack>
          <Box>50</Box>
          <Box boxSize="30px">
            <Image src="/area.png" />
          </Box>
        </HStack>
      </VStack>
      <VStack>
        <Box>Total</Box>
        <HStack>
          <Box>110</Box>
          <Box boxSize="30px">
            <Image src="/area.png" />
          </Box>
        </HStack>
      </VStack>

      <Spacer />
      <HStack>
        <Box
          bg="gold.200"
          px="10px"
          py="5px"
          borderRadius="20px"
          boxShadow="xl"
        >
          <HStack>
            <Box boxSize="30px">
              <Image src="/dollar.png" />
            </Box>
            <Box> 123456</Box>
          </HStack>
        </Box>
        <Box
          bg="turquoise.200"
          px="10px"
          py="5px"
          borderRadius="20px"
          boxShadow="xl"
        >
          <HStack>
            <Box boxSize="30px">
              <Image src="/soda.png" />
            </Box>
            <Box> 123456</Box>
          </HStack>
        </Box>
        <Box
          bg="brown.200"
          px="10px"
          py="5px"
          borderRadius="20px"
          boxShadow="xl"
        >
          <HStack>
            <Box boxSize="30px">
              <Image src="/coffee.png" />
            </Box>
            <Box> 123456</Box>
          </HStack>
        </Box>
        <Box
          bg="blue.100"
          px="10px"
          py="5px"
          borderRadius="20px"
          boxShadow="xl"
        >
          <HStack>
            <Box boxSize="30px">
              <Image src="/contract.png" />
            </Box>
            <Box> 123456</Box>
          </HStack>
        </Box>
        <Box
          bg="brown.500"
          px="10px"
          py="5px"
          borderRadius="20px"
          boxShadow="xl"
        >
          <HStack>
            <Box boxSize="30px">
              <Image src="/delivery_order.png" />
            </Box>
            <Box> 123456</Box>
          </HStack>
        </Box>
      </HStack>
    </Flex>
  );
};

export default ResourcesBar;
