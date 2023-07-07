'use client'
import { Box, Heading, Stack, Flex, Container, Text, Button } from '@chakra-ui/react'
import NextLink from 'next/link';
import Image from 'next/image'

export default function SpotifyPage() {
  return (
    <main>
      <Flex justify="space-around" maxW="7xl" align="center" ml="auto" mr="auto">
        <Container maxW={'3xl'} minH={"70vh"} textAlign="center">
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 33 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '100px' }}
              lineHeight={'110%'}
              color="jordan.300">
              Do a happy<br />
              <Text as={'span'} color={'jordan.100'}>
                Birthday Dance
              </Text>
            </Heading>
            <Text color={'white'} fontSize="xl">
              If I am a good programmer, there will be a spotify playlist embedded below this text. Listen through Jordan&apos;s Birthday playlist
              and add songs when it&apos;s open to collaboration!
            </Text>
          </Stack>
          <Button
            as={NextLink}
            bg="jordan.100"
            color="jordan.200"
            maxw="50%"
            justifyContent="center"
            mb={{base: "3", xl: "10"}}
            _hover={{bg: "jordan.300", transform: "scale(1.1)"}}
            href="https://open.spotify.com/playlist/6qTdcLQoKp3feEonH3ZQNA?si=f1242fe4e7b948b0&pt=86233f05f8b2e9086deb2a5ea81f16ef"
            target="_blank"
            rel="noopener noreferrer">
                I want to collaborate!
          </Button>
          <Box as="iframe" borderRadius="12px" mb="50px"
              src={"https://open.spotify.com/embed/playlist/6qTdcLQoKp3feEonH3ZQNA?utm_source=generator&theme=0"}
              width={"100%"}
              height={"500px"}
              frameBorder={"0"}
              allowfullscreen={""}
              allow={"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}
              loading={"lazy"}>
            </Box>
        </Container>
            <Box display={{base:"none", lg:"block"}} p="3" borderStyle="solid" borderWidth={2} borderColor="jordan.300" borderRadius="12px">
              <Image src="/JordanGriddy.gif" width={300} height={100} alt="Jordan hitting that mfing griddy"/>
            </Box>
      </Flex>
    </main>
  )
}