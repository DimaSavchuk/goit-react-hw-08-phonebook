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
import { register } from 'redux/auth/operations';
import { toast } from 'react-hot-toast';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'User Name must be at least 3 characters')
    .required('User Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email Address is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => toast.success('GOOD JOB 😉!'))
      .catch(() =>
        toast.error('This user exists😥, please try again or log in')
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
                Register
              </Heading>
              <FormControl>
                <FormLabel htmlFor="name">User Name</FormLabel>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  type="name"
                  variant="filled"
                />
                <FormErrorMessage name="name" />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                />
                <FormErrorMessage name="email" />
              </FormControl>

              <FormLabel htmlFor="password">Password</FormLabel>
              <Field
                as={Input}
                id="password"
                name="password"
                type="password"
                variant="filled"
              />
              <FormErrorMessage name="password" />

              <Button type="submit" colorScheme="purple" width="full">
                Register
              </Button>
            </VStack>
          </Form>
        </Formik>
      </Box>
    </Flex>
  );
};

export default Register;
