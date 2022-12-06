import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';

function Register() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box bg="#E4E4ED" opacity="">
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input placeholder="codelande" bg="white" type="text" />
        <FormLabel>E-mail</FormLabel>
        <Input placeholder="codelande@devmanager.com" bg="white" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel pt="4">Password</FormLabel>
        <InputGroup size="md">
          <Input
            bg="white"
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Center>
          <Button boxShadow="lg" my="8" color="white" bg="#797AA6">
            Create your account
          </Button>
        </Center>
      </FormControl>
    </Box>
  );
}

export default Register;
