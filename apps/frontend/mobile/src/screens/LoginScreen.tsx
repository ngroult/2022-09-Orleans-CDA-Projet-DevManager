import { useState, useContext } from 'react';
import {
  Text,
  Heading,
  FormControl,
  Input,
  Link,
  Button,
  Flex,
  Divider,
  Box,
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import AuthContext from '../contexts/AuthContext';

const API_HOST = Constants.expoConfig?.extra?.API_HOST;

export default function LoginScreen({ navigation }) {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const { setUser } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitLogin = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    serverError !== null ? setServerError(null) : null;

    try {
      const loginResponse = await fetch(`${API_HOST}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const jsonResponse = await loginResponse.json();
      console.log(jsonResponse);

      if (jsonResponse.status === 'KO') {
        setServerError('Username and/or password is incorrect');
      }
      if (jsonResponse.status === 'OK') {
        setUser(jsonResponse.data);
        navigation.navigate('Overview');
      }
    } catch (err) {
      console.log(err);
      setServerError('There seems to be an error, try again in a few minutes.');
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
          <Controller
            control={control}
            name="username"
            rules={{
              required: { value: true, message: 'Your username is required' },
            }}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                fontSize="md"
                w="100%"
                backgroundColor="#FFF"
                variant="unstyled"
                borderRadius="8"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors?.username ? (
            <FormControl.ErrorMessage color="error.500" h="4">
              {errors?.username.message}
            </FormControl.ErrorMessage>
          ) : (
            <Box h="4" mt="7.5px"></Box>
          )}
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
          <Controller
            control={control}
            name="password"
            rules={{
              required: { value: true, message: 'Your password is required' },
            }}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                fontSize="md"
                w="100%"
                backgroundColor="#FFF"
                variant="unstyled"
                borderRadius="8"
                type={isVisiblePassword ? 'text' : 'password'}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors?.password ? (
            <FormControl.ErrorMessage color="error.500" h="4">
              {errors?.password.message}
            </FormControl.ErrorMessage>
          ) : (
            <Box h="4" mt="7.5px"></Box>
          )}
        </FormControl>

        <Button
          mt="5"
          w="150"
          borderRadius="8"
          backgroundColor="turquoise.900"
          onPress={handleSubmit(submitLogin)}
        >
          {'Sign in'}
        </Button>
        {serverError !== null ? (
          <Text color="error.500" mt="3" w="100%" textAlign="center">
            {serverError}
          </Text>
        ) : null}

        <Divider bgColor="dark.600" my="10" w="200" />

        <Link onPress={() => navigation.navigate('Register')}>
          {'You are not register yet?'}
        </Link>
      </Flex>
    </Flex>
  );
}
