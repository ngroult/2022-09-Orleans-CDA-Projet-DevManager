import { useState } from 'react';
import {
  Text,
  Box,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
} from 'native-base';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleSubmit = async () => {
    try {
      const loginResponse = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const jsonResponse = await loginResponse.json();

      if (jsonResponse.status === 'KO') {
        setError('Username and / or password incorrect');
      }
      if (jsonResponse.status === 'OK') {
        setUser(jsonResponse.data);
        navigate('/game/overview');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Center>
      <Box w="100%" mt={'5'}>
        <Center h={'20%'}>
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            fontFamily="heading"
          >
            {'DevManager'}
          </Heading>
          <Heading color="green.300" fontWeight="medium" size="xs">
            {'Login'}
          </Heading>
        </Center>
        <VStack space={3} h={'80%'} backgroundColor={'green.100'} px="8">
          <Center>
            <Box w="100%">
              <FormControl isRequired pt={'8'}>
                <FormControl.Label>{'Username'}</FormControl.Label>
                <Input
                  placeholder="Username..."
                  w="100%"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormControl.Label>{'Password'}</FormControl.Label>
                <Input
                  w="100%"
                  type={isVisiblePassword ? 'text' : 'password'}
                  placeholder="Password..."
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </FormControl>
              <Button mt={'5'} colorScheme="indigo" onClick={handleSubmit}>
                {'Sign in'}
              </Button>
              <HStack justifyContent="center">
                <Text fontSize="sm" color="coolGray.600" m="1">
                  {"I'm a new user."}
                </Text>
                <Link
                  _text={{
                    color: 'indigo.500',
                    fontWeight: 'medium',
                    fontSize: 'sm',
                  }}
                  href="#"
                >
                  {'Sign Up'}
                </Link>
              </HStack>
            </Box>
          </Center>
        </VStack>
      </Box>
    </Center>
  );
}
