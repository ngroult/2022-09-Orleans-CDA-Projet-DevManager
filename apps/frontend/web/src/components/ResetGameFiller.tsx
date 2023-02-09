import { InputGroup, Input, FormLabel } from '@chakra-ui/react';

const ResetGameFiller = () => {
  return (
    <InputGroup
      display="flex"
      flexDirection="column"
      alignItems="center"
      m="2rem 0 1rem 0"
      p="0 1.5rem"
    >
      <FormLabel
        htmlFor="password"
        textAlign="left"
        w="100%"
        maxW="400px"
        m="0.5rem 0 0"
      >
        {'Password :'}
      </FormLabel>
      <Input
        id="password"
        maxW="400px"
        placeholder="Password..."
        bgColor="#fff"
        _placeholder={{ opacity: 0.3 }}
      />
    </InputGroup>
  );
};

export default ResetGameFiller;
