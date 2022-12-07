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
  VStack,
} from '@chakra-ui/react';
import React from 'react';

function Register() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box>
        <Center>
          <VStack h="20vh" justify="center">
          <Heading fontSize="3xl">DevManager</Heading>
          <Text  color="#797AA6" fontSize="xl">Register</Text>
          </VStack>
        </Center>
      <Box bg="#E4E4ED" h="80vh">
        <Center>
          <FormControl w="75%" pt="14">
            <FormLabel  mb="0">Username</FormLabel>
            <Input placeholder="codelande" bg="white" type="text" />
            <FormLabel pt="4" mb="0">E-mail</FormLabel>
            <Input
              placeholder="codelande@devmanager.com"
              bg="white"
              type="email"
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel pt="4" mb="0">Password</FormLabel>
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
        </Center>
        <Center>
          <Link py="7">Have you already an account ?</Link>
        </Center>
      </Box>
    </Box>
  );
}

export default Register;
