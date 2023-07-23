import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { toast } from 'react-hot-toast';

const initialValues = {
  email: '',
  password: '',
};

const userSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email Address is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn({ email: values.email, password: values.password }))
      .unwrap()
      .then(() => toast.success('Welcome 😉!'))
      .catch(() =>
        toast.error('You are not registered yet 🙂 or you made a mistake 🙁 ')
      );
    resetForm();
  };

  return (
    <Flex bg="gray.100" align="center" justify="center">
      <Box bg="white" p={6} rounded="md" w={96}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={userSchema}
        >
          <Form>
            <VStack spacing={4} align="flex-start">
              <Heading as="h2" size="lg">
                Log In
              </Heading>
              <FormControl>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Field as={Input} name="email" type="email" variant="filled" />
              </FormControl>
              <FormErrorMessage name="email" />

              <FormLabel htmlFor="password">Password</FormLabel>
              <Field
                as={Input}
                name="password"
                type="password"
                variant="filled"
                validate={value => {
                  let error;

                  if (value.length < 6) {
                    error = 'Password must contain at least 6 characters';
                  }

                  return error;
                }}
              />
              <FormErrorMessage name="password" />

              <Button type="submit" colorScheme="purple" width="full">
                Login
              </Button>
            </VStack>
          </Form>
        </Formik>
      </Box>
    </Flex>
  );
};

export default Login;
