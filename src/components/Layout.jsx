import React from 'react';
import { ChakraProvider, CSSReset, Box, Container } from '@chakra-ui/react';
import AppBar from './AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box
        w="100%"
        minHeight="100vh"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
      >
        <AppBar />
        <Container maxW="container.md" minW={60} centerContent py={4}>
          <Box bg="white" p={4} rounded="md" boxShadow="md">
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
            <Toaster reverseOrder={false} />
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Layout;
