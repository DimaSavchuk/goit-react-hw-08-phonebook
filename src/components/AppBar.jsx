import React from 'react';
import { Box, Flex, Spacer, useColorModeValue } from '@chakra-ui/react';
import Navigation from './Navigation';
import { useAuth } from 'hooks';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const bgColor = useColorModeValue('purple.600', 'gray.800');
  const textColor = useColorModeValue('white', 'gray.100');

  return (
    <Box
      as="header"
      w="100%"
      py={4}
      bg={bgColor}
      color={textColor}
      boxShadow="md"
    >
      <Flex maxW="container.md" mx="auto" px={4} align="center">
        <Navigation />
        <Spacer />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </Box>
  );
};

export default AppBar;
