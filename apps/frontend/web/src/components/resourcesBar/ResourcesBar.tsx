import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  VStack,
} from '@chakra-ui/react';

const ResourcesBar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <HStack>
          <Box boxSize="30px">
            <Image src="https://bit.ly/dan-abramov" />
          </Box>
          <Box>
          My Company
        </Box>
      </HStack>
      <Spacer />
      <VStack>
        <Box>Restant</Box>
        <HStack>
          <Box>50</Box>
          <Box boxSize="30px">
            <Image src="https://bit.ly/dan-abramov" />
          </Box>
        </HStack>
      </VStack>
      <VStack>
        <Box>Total</Box>
        <HStack>
          <Box>110</Box>
          <Box boxSize="30px">
            <Image src="https://bit.ly/dan-abramov" />
          </Box>
        </HStack>
      </VStack>

      <Spacer />
      <HStack>
        <Box bg="#F7F0D0" px="10px" py="5px" borderRadius="20px" boxShadow="xl">
          <HStack>
            <Box boxSize="30px">
              <Image src="https://bit.ly/dan-abramov" />
            </Box>
            <Box> 123456</Box>
          </HStack>
        </Box>
        <Box bg="#D9F1F0" px="10px" py="5px" borderRadius="20px" boxShadow="xl">
          <HStack>
            <Box boxSize="30px">
              <Image src="https://bit.ly/dan-abramov" />
            </Box>
            <Box> 123456</Box>
          </HStack>
        </Box>
        <Box bg="#EAD9C4" px="10px" py="5px" borderRadius="20px" boxShadow="xl">
          <HStack>
            <Box boxSize="30px">
              <Image src="https://bit.ly/dan-abramov" />
            </Box>
            <Box> 123456</Box>
          </HStack>
        </Box>
        <Box bg="#DDEDF6" px="10px" py="5px" borderRadius="20px" boxShadow="xl">
          <HStack>
            <Box boxSize="30px">
              <Image src="https://bit.ly/dan-abramov" />
            </Box>
            <Box> 123456</Box>
          </HStack>
        </Box>
        <Box bg="#E3F0FD" px="10px" py="5px" borderRadius="20px" boxShadow="xl">
          <HStack>
            <Box boxSize="30px">
              <Image src="https://bit.ly/dan-abramov" />
            </Box>
            <Box> 123456</Box>
          </HStack>
        </Box>
      </HStack>
    </Flex>
  );
};

export default ResourcesBar;
