import { useState } from 'react';
import {
  Text,
  Heading,
  FormControl,
  Input,
  Link,
  Button,
  Flex,
  Divider,
} from 'native-base';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [errors, setErrors] = useState<{
    username?: { message: string };
    password?: { message: string };
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const submitLogin = async () => {
    if (!username) {
      setErrors({
        ...errors,
        username: { message: 'Your username is required' },
      });
      return false;
    } else if (!password) {
      setErrors({
        ...errors,
        password: { message: 'Your password is required' },
      });
      return false;
    } else {
      // if (errors?.username !== undefined) {
      //   setErrors({
      //     ...errors,
      //     username: { message: 'Your username is required' },
      //   });
      // }
      // if (errors?.password !== undefined) {
      //   setErrors({
      //     ...errors,
      //     password: { message: 'Your password is required' },
      //   });
      // }

      if (errors === null) {
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
            setServerError('Username and/or password is incorrect');
          }
          if (jsonResponse.status === 'OK') {
            navigation.navigate('Overview');
          }
        } catch (err) {
          setServerError(
            'There seems to be an error, try again in a few minutes.'
          );
        }
      }
    }
  };

  return (
    <Flex flex="1" backgroundColor="turquoise.200">
      <Flex align="center" justify="center" bgColor="#FFF" py="9">
        <Heading size="lg" color="#000" fontWeight="400" mb="5">
          {'DevManager'}
        </Heading>
        <Heading color="turquoise.900" fontWeight="medium" size="lg">
          {'Login'}
        </Heading>
      </Flex>
      <Flex align="center" justify="center" px="12">
        <FormControl
          isRequired
          pt="8"
          isInvalid={errors?.username ? true : false}
        >
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

        <FormControl
          isRequired
          mt="3"
          isInvalid={errors?.password ? true : false}
        >
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
          onPress={() => submitLogin()}
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
