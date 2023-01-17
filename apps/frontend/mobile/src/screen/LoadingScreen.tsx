import { Center, Heading, HStack, Spinner } from 'native-base';
import React from 'react';

export default function LoadingScreen() {
  return (
    <Center h={'100%'}>
      <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    </Center>
  );
}
