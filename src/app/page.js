'use client'
import Image from 'next/image'
import { Box, Heading, Flex } from '@chakra-ui/react'
import JordanStats from "@/components/Stats.js"
import Timeline from "@/components/Timeline.js"


export default function Home() {
  return (
    <main>
      <Flex alignItems="center" justifyContent="space-around" py="10px">
        <Box display={{base: "none", lg:"block"}}>
          <Image priority src="/mushroom.svg" width={250} height={250} alt="mushroom"/>
        </Box>
        <Box borderRadius="20px" border="4px" borderColor="jordan.100" w="max-content" p={{base: "10px 10px", lg:"20px 80px"}}>
          <Heading as="h1" size="4xl" textAlign="center" color="jordan.100">
            Happy Birthday Jordan!
          </Heading>
        </Box>
        <Box display={{base: "none", lg:"block"}}>
          <Image priority src="/mushroom.svg" width={250} height={250} alt="mushroom"/>
        </Box>
      </Flex>

      <JordanStats/>

      <Timeline/>

    </main>
  )
}
