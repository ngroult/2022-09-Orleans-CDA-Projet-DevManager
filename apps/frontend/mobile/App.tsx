import { useCallback, useEffect, useState } from 'react';
import { extendTheme, NativeBaseProvider, View } from 'native-base';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OverviewScreen from './src/screens/OverviewScreen';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const theme = extendTheme({
    fontConfig: {
      Orbitron: {
        400: {
          normal: 'Orbitron_400Regular',
        },
        500: {
          normal: 'Orbitron_500Medium',
        },
        600: {
          normal: 'Orbitron_600SemiBold',
        },
        700: {
          normal: 'Orbitron_700Bold',
        },
        800: {
          normal: 'Orbitron_800ExtraBold',
        },
        900: {
          normal: 'Orbitron_900Black',
        },
      },
      ChakraPetch: {
        300: {
          normal: 'ChakraPetch_300Light',
          italic: 'ChakraPetch_300Light_Italic',
        },
        400: {
          normal: 'ChakraPetch_400Regular',
          italic: 'ChakraPetch_400Regular_Italic',
        },
        500: {
          normal: 'ChakraPetch_500Medium',
          italic: 'ChakraPetch_500Medium_Italic',
        },
        600: {
          normal: 'ChakraPetch_600SemiBold',
          italic: 'ChakraPetch_600SemiBold_Italic',
        },
        700: {
          normal: 'ChakraPetch_700Bold',
          italic: 'ChakraPetch_700Bold_Italic',
        },
      },
    },
    fonts: {
      heading: 'Orbitron',
      body: 'ChakraPetch',
    },
    colors: {
      turquoise: {
        200: '#D9F1F0',
        300: '#C6E9E9',
        500: '#92D5D4',
        900: '#42B7B4',
      },
      blue: {
        100: '#DDEDF6',
        200: '#E4E4ED',
        500: '#BCBCD2',
        900: '#797AA6',
      },
      purple: {
        200: '#EFD8EB',
        300: '#E7C5E0',
        500: '#D79ECC',
        900: '#B03D99',
      },
      pink: {
        200: '#F7F0D0',
        500: '#F380C5',
        900: '#E7008C',
      },
      gold: {
        200: '#F7F0D0',
        300: '#F2E9B9',
        500: '#E7D478',
        900: '#D4B514',
      },
      brown: {
        200: '#F2E1CC',
        500: '#E6D2BE',
      },
    },
  });

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          Orbitron_400Regular: require('./assets/fonts/orbitron/Orbitron_400Regular.ttf'),
          Orbitron_500Medium: require('./assets/fonts/orbitron/Orbitron_500Medium.ttf'),
          Orbitron_600SemiBold: require('./assets/fonts/orbitron/Orbitron_600SemiBold.ttf'),
          Orbitron_700Bold: require('./assets/fonts/orbitron/Orbitron_700Bold.ttf'),
          Orbitron_800ExtraBold: require('./assets/fonts/orbitron/Orbitron_800ExtraBold.ttf'),
          Orbitron_900Black: require('./assets/fonts/orbitron/Orbitron_900Black.ttf'),
          ChakraPetch_300Light_Italic: require('./assets/fonts/chakra-petch/ChakraPetch_300Light_Italic.ttf'),
          ChakraPetch_300Light: require('./assets/fonts/chakra-petch/ChakraPetch_300Light.ttf'),
          ChakraPetch_400Regular_Italic: require('./assets/fonts/chakra-petch/ChakraPetch_400Regular_Italic.ttf'),
          ChakraPetch_400Regular: require('./assets/fonts/chakra-petch/ChakraPetch_400Regular.ttf'),
          ChakraPetch_500Medium_Italic: require('./assets/fonts/chakra-petch/ChakraPetch_500Medium_Italic.ttf'),
          ChakraPetch_500Medium: require('./assets/fonts/chakra-petch/ChakraPetch_500Medium.ttf'),
          ChakraPetch_600SemiBold_Italic: require('./assets/fonts/chakra-petch/ChakraPetch_600SemiBold_Italic.ttf'),
          ChakraPetch_600SemiBold: require('./assets/fonts/chakra-petch/ChakraPetch_600SemiBold.ttf'),
          ChakraPetch_700Bold_Italic: require('./assets/fonts/chakra-petch/ChakraPetch_700Bold_Italic.ttf'),
          ChakraPetch_700Bold: require('./assets/fonts/chakra-petch/ChakraPetch_700Bold.ttf'),
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider theme={theme}>
      <View onLayout={onLayoutRootView}></View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Overview" component={OverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
