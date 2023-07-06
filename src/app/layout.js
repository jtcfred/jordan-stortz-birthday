'use client'

import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar.js"
import Footer from "@/components/Footer.js"
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { extendTheme } from "@chakra-ui/react"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })
const theme = extendTheme({
  colors: {
    jordan: {
      100: "#68D391",
      200: "#264653",
      300: "#E9C46A",
      400: "#F4A261",
      500: "#E76F51"
    }
  },
  styles: {
    global: {
      'html, body': {
        bg: "jordan.200",
        h: "100%"
      }
    }
  }
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Navbar/>
            {children}
            <Footer/>
          </ChakraProvider>
        </CacheProvider>
        <Analytics />
      </body>
    </html>
  )
}
