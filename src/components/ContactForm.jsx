import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  name: Yup.string().required('Is required'),
  number: Yup.string()
    .required('Is required')
    .matches(
      /^[\d()+-]+$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(13, '+38-XXX-XX-XX-XXX, The minimum length is 13 characters'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddContacts = async (values, { resetForm }) => {
    setIsSubmitting(true);

    const inContactList = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    const hasDuplicateNumber = contacts.some(
      ({ number }) => number === values.number
    );

    if (inContactList) {
      toast.error(`${values.name} already in your contacts`);
      setIsSubmitting(false);
      return;
    }

    if (hasDuplicateNumber) {
      toast.error(`Phone number ${values.number} already exists`);
      setIsSubmitting(false);
      return;
    }

    try {
      await dispatch(addContacts({ name: values.name, number: values.number }));
      toast.success('Contact is added 😉!');
      resetForm();
    } catch (error) {
      toast.error('Some mistake');
    }

    setIsSubmitting(false);
    console.log('submit');
  };

  useEffect(() => {
    const resetSubmissionStatus = () => {
      setIsSubmitting(false);
    };

    const timer = setTimeout(resetSubmissionStatus, 3000);

    return () => clearTimeout(timer);
  }, [isSubmitting]);

  return (
    <Box minWidth="704px">
      <Formik
        initialValues={initialValues}
        onSubmit={handleAddContacts}
        validationSchema={userSchema}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <VStack spacing={4} align="flex-start">
              <FormControl isInvalid={errors.name && touched.name}>
                <FormLabel htmlFor="name">User Name</FormLabel>
                <Field as={Input} name="name" type="text" variant="filled" />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.number && touched.number}>
                <FormLabel htmlFor="number">Phone Number</FormLabel>
                <Field as={Input} name="number" type="text" variant="filled" />
                <FormErrorMessage>{errors.number}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isSubmitting}
              >
                Add Contact
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
