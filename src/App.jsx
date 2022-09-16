import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from './Pages';
import Router from './routes';
import { colors } from './Theme/theme.js';

// Create a client
const queryClient = new QueryClient();

export default function App() {
   // for changing theme
   const [colorScheme, setColorScheme] = useState('light');

   const toggleColorScheme = (value) =>
      setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

   return (
      <QueryClientProvider client={queryClient}>
         <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
               theme={{
                  colorScheme,
                  colors,
                  primaryColor: 'brand',
               }}
               withGlobalStyles
               withNormalizeCSS>
               <Navbar />
               <Router />

               <ToastContainer />
            </MantineProvider>
         </ColorSchemeProvider>
      </QueryClientProvider>
   );
}
