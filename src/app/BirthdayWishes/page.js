'use client'
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  chakra,
} from '@chakra-ui/react';

const testimonials = [
  {
    heading: 'Efficient Collaborating',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    name: 'Jane Cooper',
    title: 'CEO at ABC Corporation',
  },
  {
    heading: 'Intuitive Design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    name: 'John Doe',
    title: 'Designer',
  },
  {
    heading: 'Mindblowing Service',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
    name: 'Emily Smith',
    title: 'Customer Support',
  },
];

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg="jordan.100"
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: 'jordan.300',
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'} color="jordan.200">
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text textAlign={'center'} color="jordan.200" fontSize={'sm'}>
      {children}
    </Text>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg="jordan.200">
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'} color="jordan.100">
          <Heading>
            Jordan Fans <chakra.span color="jordan.300">Unite</chakra.span>
          </Heading>
          <Text color="jordan.300">
            Jordan fans have set aside their differences to come together and wish Jordan a Happy Birthday!
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <TestimonialContent>
                <TestimonialHeading>{testimonial.heading}</TestimonialHeading>
                <TestimonialText>{testimonial.text}</TestimonialText>
              </TestimonialContent>
              <Box textAlign="center" mt="7">
                <Text fontWeight={600} color="jordan.100">{testimonial.name}</Text>
                <Text fontSize={'sm'} color="jordan.300">
                  {testimonial.title}
                </Text>
              </Box>
            </Testimonial>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
