import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import theme from "./utils/theme";
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/chakra-petch/400.css';
import '@fontsource/orbitron/700.css';
import CharacterCard from './components/character_card/CharacterCard';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
  <React.StrictMode>
    <App />
    <CharacterCard />
  </React.StrictMode>
  </ChakraProvider>
)
