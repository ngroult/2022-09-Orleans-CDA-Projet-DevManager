import { StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import '@fontsource/chakra-petch/400.css';
import '@fontsource/orbitron/700.css';
import CharacterCard from './components/CharacterCard';
import theme from './theme';
import App from './App';
import EventModal from './components/popups/EventModal';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <EventModal />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
