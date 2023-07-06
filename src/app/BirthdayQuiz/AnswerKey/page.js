'use client'
import {
    Box,
    Heading,
    Container,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Stack,
} from '@chakra-ui/react';
import quiz from "../data.js"

export default function AnswerKey() {

    const {questions} = quiz;

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
                    The Answers
                </Heading>
                <TableContainer bg="jordan.100" borderRadius="lg">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Question</Th>
                                <Th>Answer</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                        {
                            questions.map((question) => (
                                <Tr key={question.id}>
                                    <Td>{question.question}</Td>
                                    <Td>{question.correctAnswer}</Td>
                                </Tr>
                            ))
                        }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Stack>
        </Container>
    );
}
