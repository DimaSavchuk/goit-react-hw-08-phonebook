import { Box, Button, Link } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      flexDirection="column"
      minWidth="704px"
    >
      <Box fontSize="xl" fontWeight="bold" mb={4}>
        Page not found
      </Box>
      <Link as={NavLink} to="/">
        <Button type="button" colorScheme="purple" size="md">
          Go Back
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
