'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { extendTheme } from "@chakra-ui/react"


const inter = Inter({ subsets: ['latin'] })
const theme = extendTheme({
  colors: {
    jordan: {
      100: "#558b6e",
      200: "#88a09e",
      300: "#322214",
      400: "#ecf39e",
      500: "#f4d06f"
    }
  }
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
