import { StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import '@fontsource/chakra-petch/400.css';
import '@fontsource/orbitron/700.css';
import theme from './theme';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { GameProvider } from './contexts/GameContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <GameProvider>
            <App />
          </GameProvider>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  </StrictMode>
);
