import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import {
  Box,
  Button,
  Center,
  CircularProgress,
  List,
  ListItem,
} from '@chakra-ui/react';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (!contacts?.length && !error & !isLoading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop={5}
      >
        Contact list is empty
      </Box>
    );
  }

  return (
    <Center>
      <Box width="md" padding={4}>
        {error && <div>{error}</div>}
        {isLoading ? (
          <CircularProgress isIndeterminate color="purple.500" />
        ) : (
          <List listStyleType="none">
            {contacts.map(contact => (
              <ListItem key={contact.id}>
                <Box
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                  boxShadow="md"
                  mb={4}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <div>
                    <p>{contact.name}: </p>
                    <p>{contact.number}</p>
                  </div>
                  <Button
                    colorScheme="red"
                    onClick={() => dispatch(deleteContacts(contact.id))}
                  >
                    Remove
                  </Button>
                </Box>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Center>
  );
};

export default ContactsList;
