import React from 'react';
import { Box, CircularProgress, Text } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CircularProgress size="20px" color="tomato" thickness="4px" />
      <Text ml="4">Loading...</Text>
    </Box>
  );
};

export default Loader;
