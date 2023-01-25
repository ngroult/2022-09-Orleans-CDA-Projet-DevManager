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
  Flex,
  Divider,
} from 'native-base';

export default function LoginScreen({ navigation }) {
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
    <Flex flex="1" backgroundColor="turquoise.200">
      <Flex align="center" justify="center" bgColor="#FFF" py="9">
        <Heading
          size="lg"
          color="#000"
          fontWeight="400"
          fontFamily="heading"
          mb="5"
        >
          {'DevManager'}
        </Heading>
        <Heading color="turquoise.900" fontWeight="medium" size="lg">
          {'Login'}
        </Heading>
      </Flex>
      <Flex align="center" justify="center" px="12">
        <FormControl isRequired pt="8">
          <FormControl.Label>
            <Text fontSize="md" color="#000" mb="-2" ml="3">
              {'Username'}
            </Text>
          </FormControl.Label>
          <Input
            fontSize="md"
            w="100%"
            backgroundColor="#FFF"
            variant="unstyled"
            borderRadius="8"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired mt="3">
          <FormControl.Label>
            <Text fontSize="md" color="#000" mb="-2" ml="3">
              {'Password'}
            </Text>
          </FormControl.Label>
          <Input
            w="100%"
            fontSize="md"
            backgroundColor="#FFF"
            variant="unstyled"
            borderRadius="8"
            type={isVisiblePassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormControl>
        <Button
          mt="5"
          w="150"
          borderRadius="8"
          backgroundColor="turquoise.900"
          onClick={handleSubmit}
          onPress={() => navigation.navigate('Overview')}
        >
          {'Sign in'}
        </Button>
        <Divider bgColor="dark.600" my="10" w="200" />
        <Link onPress={() => navigation.navigate('Register')}>
          {'You are not register yet?'}
        </Link>
      </Flex>
    </Flex>
  );
}
