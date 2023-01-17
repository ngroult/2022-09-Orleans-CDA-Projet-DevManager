import { useFonts } from 'expo-font';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Login from './src/screen/Login';

export default function App() {
  const [fontsLoaded] = useFonts({
    Orbitron: require('./assets/Orbitron/static/Orbitron-Bold.ttf'),
    ChakraPetch: require('./assets/Chakra_Petch/ChakraPetch-Regular.ttf'),
  });

  return (
    <NativeBaseProvider>
      <Login />
    </NativeBaseProvider>
  );
}
