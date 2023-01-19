import { useFonts } from 'expo-font';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Orbitron: require('./assets/Orbitron/static/Orbitron-Bold.ttf'),
    ChakraPetch: require('./assets/Chakra_Petch/ChakraPetch-Regular.ttf'),
  });

  return (
    <NativeBaseProvider>
      <LoginScreen />
    </NativeBaseProvider>
  );
}
