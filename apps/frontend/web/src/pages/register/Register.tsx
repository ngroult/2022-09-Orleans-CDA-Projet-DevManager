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
import React, { useState } from 'react';

function Register() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({});

  const  handleSubmit = async() => {
     setFormData({
      username: username,
      email: email,
      password: password,
    });
     await fetch('api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(() => {
      console.log('it worked');
    });
  };

  return (
    <Box>
      <Center>
        <VStack h="20vh" justify="center">
          <Heading fontSize="3xl">DevManager</Heading>
          <Text color="#797AA6" fontSize="xl">
            Register
          </Text>
        </VStack>
      </Center>
      <Box bg="#E4E4ED" h="80vh">
        <Center>
          <FormControl w="75%" pt="14">
            <FormLabel mb="0">Username</FormLabel>
            <Input
              placeholder="codelande"
              bg="white"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <FormLabel pt="4" mb="0">
              E-mail
            </FormLabel>
            <Input
              placeholder="codelande@devmanager.com"
              bg="white"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel pt="4" mb="0">
              Password
            </FormLabel>
            <InputGroup size="md">
              <Input
                bg="white"
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Center>
              <Button
                boxShadow="lg"
                my="8"
                color="white"
                bg="#797AA6"
                onClick={handleSubmit}
              >
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
