import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';

function Register() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box>
      <Center>
        <Heading fontSize="3xl">DevManager</Heading>
      </Center>
      <Center>
        <Text fontSize="xl">Register</Text>
      </Center>

      <Box bg="#E4E4ED">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input placeholder="codelande" bg="white" type="text" />
          <FormLabel>E-mail</FormLabel>
          <Input
            placeholder="codelande@devmanager.com"
            bg="white"
            type="email"
          />
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
          <Center>
            <Divider borderColor="9393B7" width="75%" />
          </Center>
        </FormControl>
        <Center>
          <Link py="7">Have already an account</Link>
        </Center>
      </Box>
    </Box>
  );
}

export default Register;
