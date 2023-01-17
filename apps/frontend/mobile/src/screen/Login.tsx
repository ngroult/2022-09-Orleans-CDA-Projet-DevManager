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
import { StyleSheet } from 'react-native';

export default function Login() {
  return (
    <Center>
      <Box w="100%" mt={'5'}>
        <Center h={'20%'}>
          <Heading
            style={{ fontFamily: 'Orbitron' }}
            size="lg"
            fontWeight="600"
            color="coolGray.800"
          >
            {'DevManager'}
          </Heading>
          <Heading style={styles.font} color="green.300" fontWeight="medium" size="xs">
            {'Login'}
          </Heading>
        </Center>
        <VStack space={3} h={'80%'} backgroundColor={'green.100'}>
          <Center>
            <Box w="55%">
              <FormControl isRequired pt={'8'}>
                <FormControl.Label>{'Username'}</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl isRequired>
                <FormControl.Label>{'Password'}</FormControl.Label>
                <Input type="password" />
              </FormControl>
              <Button mt={'5'} colorScheme="indigo">
                {'Sign in'}
              </Button>
              <HStack justifyContent="center">
                <Text fontSize="sm" color="coolGray.600">
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

const styles = StyleSheet.create({
  font: {
    fontFamily: 'ChakraPetch',
  }
});
