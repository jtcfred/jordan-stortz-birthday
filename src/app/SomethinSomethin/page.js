'use client'

import { Box, Heading, Stack, Flex, Container, Text, Button } from '@chakra-ui/react'


export default function SpotifyPage() {
  return (
    <main>
      <Container maxW={'3xl'} minH={"70vh"}>
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
      </Container>
    </main>
  )
}