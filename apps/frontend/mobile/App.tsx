import { useCallback, useEffect, useState } from 'react';
import { extendTheme, NativeBaseProvider, View } from 'native-base';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  Orbitron_400Regular,
  Orbitron_500Medium,
  Orbitron_600SemiBold,
  Orbitron_700Bold,
  Orbitron_800ExtraBold,
  Orbitron_900Black,
} from '@expo-google-fonts/orbitron';
import {
  ChakraPetch_300Light_Italic,
  ChakraPetch_300Light,
  ChakraPetch_400Regular_Italic,
  ChakraPetch_400Regular,
  ChakraPetch_500Medium_Italic,
  ChakraPetch_500Medium,
  ChakraPetch_600SemiBold_Italic,
  ChakraPetch_600SemiBold,
  ChakraPetch_700Bold_Italic,
  ChakraPetch_700Bold,
} from '@expo-google-fonts/chakra-petch';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const theme = extendTheme({
    fontConfig: {
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

        await Font.loadAsync({ Orbitron_400Regular });
        await Font.loadAsync({ Orbitron_500Medium });
        await Font.loadAsync({ Orbitron_600SemiBold });
        await Font.loadAsync({ Orbitron_700Bold });
        await Font.loadAsync({ Orbitron_800ExtraBold });
        await Font.loadAsync({ Orbitron_900Black });

        await Font.loadAsync({ ChakraPetch_300Light_Italic });
        await Font.loadAsync({ ChakraPetch_300Light });
        await Font.loadAsync({ ChakraPetch_400Regular_Italic });
        await Font.loadAsync({ ChakraPetch_400Regular });
        await Font.loadAsync({ ChakraPetch_500Medium_Italic });
        await Font.loadAsync({ ChakraPetch_500Medium });
        await Font.loadAsync({ ChakraPetch_600SemiBold_Italic });
        await Font.loadAsync({ ChakraPetch_600SemiBold });
        await Font.loadAsync({ ChakraPetch_700Bold_Italic });
        await Font.loadAsync({ ChakraPetch_700Bold });

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

  return (
    <NativeBaseProvider theme={theme}>
      <View onLayout={onLayoutRootView}>
        <LoginScreen />
      </View>
    </NativeBaseProvider>
  );
}
