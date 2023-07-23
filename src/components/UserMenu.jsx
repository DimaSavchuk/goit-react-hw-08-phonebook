import { useAuth } from 'hooks';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex align="center" justify="center">
      <Text fontSize="lg" color="white" mr={2}>
        Welcome,{' '}
        <Box as="span" fontWeight={800} color="yellow.300">
          {user.name}
        </Box>
      </Text>
      <Button
        type="button"
        colorScheme="purple"
        size="md"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Flex>
  );
};

export default UserMenu;
