import { ROUTER } from 'Routers/Routes';
import { useAuth } from 'hooks';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Flex>
        <Box mx={2}>
          <Link
            as={NavLink}
            to={ROUTER.HOME}
            fontSize="lg"
            colorScheme="purple"
          >
            Home
          </Link>
        </Box>
        {isLoggedIn && (
          <Box mx={2}>
            <Link as={NavLink} to={ROUTER.CONTACTS} fontSize="lg">
              Contacts
            </Link>
          </Box>
        )}
      </Flex>
    </nav>
  );
};

export default Navigation;
