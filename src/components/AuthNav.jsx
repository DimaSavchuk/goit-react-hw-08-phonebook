import React from 'react';
import { Box, Flex, Button, useColorModeValue } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from 'Routers/Routes';

const AuthNav = () => {
  const hoverColor = useColorModeValue('white', 'purple.200');
  const hoverBg = useColorModeValue('gray.400', 'gray.300');

  return (
    <Flex>
      <Box mx={2}>
        <Button
          as={NavLink}
          to={ROUTER.REGISTER}
          fontSize="lg"
          colorScheme="purple"
          _hover={{
            color: hoverColor,
            bg: hoverBg,
          }}
        >
          Register
        </Button>
      </Box>
      <Box mx={2}>
        <Button
          as={NavLink}
          to={ROUTER.LOGIN}
          fontSize="lg"
          colorScheme="purple"
          _hover={{
            color: hoverColor,
            bg: hoverBg,
          }}
        >
          Log In
        </Button>
      </Box>
    </Flex>
  );
};

export default AuthNav;
