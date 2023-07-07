'use client'
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
} from '@chakra-ui/react';

export default function IDontCare() {
    return (
        <>
            <Container maxW={'3xl'} minH={"70vh"}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 33}}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
                        lineHeight={'110%'}
                        color="jordan.300">
                        <br/>
                        <Text as={'span'} color={'jordan.100'} fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '100px' }}>I don&apos;t care 
                        </Text>
                        <br></br>
                        if you are having problems
                    </Heading>
                </Stack>
            </Container>
        </>
    );
}
