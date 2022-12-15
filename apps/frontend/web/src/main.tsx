import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './pages/Register';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Register />
    </ChakraProvider>
  </React.StrictMode>
);
