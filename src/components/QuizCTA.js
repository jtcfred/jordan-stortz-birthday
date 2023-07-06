import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
} from '@chakra-ui/react';

export default function QuizCTA({ handleClick }) {
    return (
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
                    It&apos;s time for<br />
                    <Text as={'span'} color={'jordan.100'}>
                        Jordan&apos;s Birthday Quiz
                    </Text>
                </Heading>
                <Text color={'white'} fontSize="xl">
                    I have written an action packed Jordan birthday quiz
                    to put to the test your working knowledge of Jordan Stortz.
                    She kinda has a lot going on so don&apos;t be suprised if there
                    is stuff you don&apos;t know.
                </Text>
                <Button
                    colorScheme={'jordan.100'}
                    fontSize={{ base: '2xl', sm: '4xl', md: '6xl', lg: '100px' }}
                    p={{ base: "lg", lg: "50px" }}
                    bg={'jordan.100'}
                    color="jordan.200"
                    rounded={'full'}
                    px={6}
                    _hover={{
                        bg: 'jordan.300',
                        transform: "scale(1.1)"
                    }}
                    onClick={handleClick}
                >
                    Get Started
                </Button>
            </Stack>
        </Container>
    );
}
