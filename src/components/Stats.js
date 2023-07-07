'use client'
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import Image from 'next/image'

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: '10+',
    content: (
      <>
        <StatsText>Squishmallows</StatsText> purchased from meandering in Targets and Walmarts
        across South Carolina
      </>
    ),
  },
  {
    title: '24/7',
    content: (
      <>
        <StatsText>Hurting Tummy</StatsText> on account of her lactose intolerance
        and IBS making her God&apos;s strongest soldier
      </>
    ),
  },
  {
    title: '13%',
    content: (
      <>
        <StatsText>Alcohol</StatsText> in the Chili&apos;s Margeritas that she only
        needs one sip of to get drunk
      </>
    ),
  },
  {
    title: '250M+',
    content: (
      <>
        <StatsText>Pictures</StatsText> of Espeon and Umbreon on a certain website
        that rhymes with &quot;mule sturdy floor&quot;
      </>
    ),
  },
];


export default function JordanStats() {
  return (
    <Box bg={'jordan.100'} position={'relative'}>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'jordan.200'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 10, xl: 20 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'jordan.200'}>
                Jordan Statistics
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                Jordan is turning 22,
              </Heading>
              <Text fontSize={'xl'} color={'jordan.200'}>
                and one would hopefully think that she accomplished some stuff
                in the time since her last birthday. Let&apos;s take a look at some
                of the Hall of Fame numbers that she put up since July 2022.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'jordan.200'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} mr="auto" ml="auto" align="center" display={{base: "none", lg: "flex"}}>
            <Box mr="auto" ml="auto">
              <Image src="/AllukaSimba.jpg" width={400} height={250} alt="cutest dog in the world" />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
