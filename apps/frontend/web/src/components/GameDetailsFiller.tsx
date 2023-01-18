import { Input, InputGroup, FormLabel } from '@chakra-ui/react';

const GameDetailsFiller = () => {
  return (
    <InputGroup
      display="flex"
      flexDirection="column"
      alignItems="center"
      m="2rem 0 1rem 0"
      p="0 1.5rem"
    >
      <FormLabel htmlFor="company-name" textAlign="left" w="100%" m="0">
        {'Company name :'}
      </FormLabel>
      <Input
        id="company-name"
        maxW="400px"
        placeholder="My Company..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
      />
      <FormLabel htmlFor="ceo-name" textAlign="left" w="100%" m="0.5rem 0 0">
        {'CEO Name :'}
      </FormLabel>
      <Input
        id="ceo-name"
        maxW="400px"
        placeholder="Elon Musk..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
      />
      <FormLabel htmlFor="location" textAlign="left" w="100%" m="0.5rem 0 0">
        {'Location :'}
      </FormLabel>
      <Input
        id="location"
        maxW="400px"
        placeholder="Paris, France..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
      />
    </InputGroup>
  );
};

export default GameDetailsFiller;
