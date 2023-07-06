'use client'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  chakra,
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
import { useRouter } from 'next/navigation';
import NextLink from 'next/link';

export default function SignupCard() {

  const [firstName, setFirstName] = useState('');
  const [authorTitle, setAuthorTitle] = useState('');
  const [header, setHeader] = useState('');
  const [birthdayWish, setBirthdayWish] = useState('');

  const { handleSubmit, register, formState: { errors } } = useForm();
  const router = useRouter()

  const mySubmission = async (values) => {
    const { firstName, authorTitle, header, birthdayWish } = values;
  
    const payload = {
      heading: header,
      text: birthdayWish,
      name: firstName,
      title: authorTitle,
    };

    try {
      const response = await fetch('/api/Wishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Testimonial added successfully
        router.push('/BirthdayWishes')
      } else {
        // Failed to add testimonial
        alert('got a bad response from http');
      }
    } catch (error) {
      console.error('Error adding testimonial:', error);
      alert('the try block that fetches the post caught an error');
    }
  };


  return (
    <Flex
      minH={'70vh'}
      align={'center'}
      justify={'center'}
      bg="jordan.200">
      <Stack spacing={8} mx={'auto'} maxW={'3xl'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'8xl'} textAlign={'center'} color="jordan.100">
            Submit your <chakra.span color="jordan.300">birthday wish</chakra.span>
          </Heading>
          <Text fontSize={'lg'} color="white">
            When you click the button on the bottom, it will be added to the page
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg="jordan.100"
          boxShadow={'lg'}
          p={8}>
          <Stack as="form" spacing={4} onSubmit={handleSubmit(mySubmission)} color="jordan.200" borderColor="jordan.200">
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired isInvalid={errors.firstName}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    borderColor="black"
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
                    borderColor="black"
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
                borderColor="black"
                type="text"
                placeholder="10/10 Girlfriend"
                {...register('header', { required: 'Header is required' })}
              />
            </FormControl>
            <FormControl isRequired isInvalid={errors.birthdayWish}>
              <FormLabel>Birthday Wish</FormLabel>
              <Input
                borderColor="black"
                type="text"
                {...register('birthdayWish', { required: 'Birthday Wish is required' })}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                size="lg"
                bg={'jordan.200'}
                color={'white'}
                _hover={{
                  bg: 'jordan.300',
                }}
              >
                Submit Wish
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Having issues? <Link color={'blue.400'} as={NextLink} href="/idc">Let me know</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
