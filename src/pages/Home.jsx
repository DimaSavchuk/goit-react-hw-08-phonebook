import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import IMG from '../images/phonebook.gif';

const Home = () => {
  return (
    <Box textAlign="center" maxWidth="704px" m="auto">
      <Heading as="h1" size="xl" mb={4}>
        Phonebook
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Hello, dear user, welcome to our Phonebook app. Here you can store your
        contacts and quickly find them when you need them.
      </Text>
      <Image
        src={IMG}
        boxSize="xl"
        mt={5}
        mb={5}
        ml={'auto'}
        mr={'auto'}
        rounded="md"
      />
    </Box>
  );
};

export default Home;
