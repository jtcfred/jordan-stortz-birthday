'use client'
import Image from 'next/image'
import { Box, Heading, Center, Flex } from '@chakra-ui/react'
import mushroom from '/public/vercel.svg'

export default function BirthdayWishes() {
  return (
    <main>
        <Flex alignItems="center" justifyContent="space-around">

          <Box borderRadius="20px" border="4px" borderColor="jordan.100" w="max-content" p="20px 80px" mt="20">
            <Heading as="h1" size="4xl" textAlign="center" color="jordan.100">
              Happy Birthday Jordan!
            </Heading>
          </Box>

        </Flex>
    </main>
  )
}
