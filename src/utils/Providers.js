'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { extendTheme } from "@chakra-ui/react"
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'



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

export default function Providers({ children }) {
    return (
        <>
            <CacheProvider>
                <ChakraProvider theme={theme}>
                    {children}
                </ChakraProvider>
            </CacheProvider>
            <Analytics />
        </>
    )
}