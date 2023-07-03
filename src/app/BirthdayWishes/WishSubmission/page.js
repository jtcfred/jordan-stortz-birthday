'use client'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormHelperText,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from "react-hook-form";


export default function SignupCard() {

  const [firstName, setFirstName] = useState('');
  const [authorTitle, setAuthorTitle] = useState('');
  const [header, setHeader] = useState('');
  const [birthdayWish, setBirthdayWish] = useState('');

  const { handleSubmit, register, formState: { errors } } = useForm();

  function validateName(value) {
    if (!value) {
      return "Name is required";
    } else if (value == "Jackson" || value == "Jackson Cozzi") {
      return "Don't impersonate me you stupid fuck";
    } else return true;
  }


  const mySubmission = async (values) => {
    const { firstName, authorTitle, header, birthdayWish } = values;
  
    const payload = {
      heading: header,
      text: birthdayWish,
      name: firstName,
      title: authorTitle,
    };

    try {
      const response = await fetch('https://jordan-stortz-birthday.vercel.app/api/Wishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Testimonial added successfully
        alert('Testimonial added successfully');
      } else {
        // Failed to add testimonial
        alert('Failed to add testimonial');
      }
    } catch (error) {
      console.error('Error adding testimonial:', error);
      alert('Failed to add testimonial');
    }
  };


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Submit your birthday wish
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            When you click the button on the bottom, it will be added to the page
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack as="form" spacing={4} onSubmit={handleSubmit(mySubmission)}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired isInvalid={errors.firstName}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Jackson"
                    {...register('firstName', { required: 'Name is required' })}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired isInvalid={errors.authorTitle}>
                  <FormLabel>Author Title</FormLabel>
                  <Input
                    type="text"
                    placeholder="Jordan's Boyfriend"
                    {...register('authorTitle', { required: 'Author Title is required' })}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl isRequired isInvalid={errors.header}>
              <FormLabel>Header</FormLabel>
              <Input
                type="text"
                placeholder="10/10 Girlfriend"
                {...register('header', { required: 'Header is required' })}
              />
            </FormControl>
            <FormControl isRequired isInvalid={errors.birthdayWish}>
              <FormLabel>Birthday Wish</FormLabel>
              <Input
                type="text"
                {...register('birthdayWish', { required: 'Birthday Wish is required' })}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Submit Wish
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Having issues? <Link color={'blue.400'}>Let me know</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
