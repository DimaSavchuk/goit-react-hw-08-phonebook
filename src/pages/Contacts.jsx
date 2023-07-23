import React, { useEffect } from 'react';
import { CircularProgress, Heading } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Heading as="h1" size="xl" mb={4}>
        Contacts Page
      </Heading>
      <ContactForm />
      <Filter />
      {isLoading && <CircularProgress isIndeterminate color="purple.500" />}
      <ContactsList />
    </div>
  );
};

export default Contacts;
