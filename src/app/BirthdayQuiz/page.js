'use client'
import Image from 'next/image'
import { chakra, Box, Card, CardHeader, CardBody, Heading, Container, Button, Text } from '@chakra-ui/react'
import QuizCTA from "@/components/QuizCTA"
import React, { useState } from "react"
import data from "./data.js"
import JordanStats from '@/components/Stats.js'

export default function BirthdayQuiz() {
  
  return (
    <main>
        {/* <QuizCTA/> */}
        <Quiz/>
    </main>
  )
}


const Quiz = () => {

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const {questions} = data;
  const {question, answers, correctAnswer} = questions[activeQuestion];

const onAnswerSelected = (answer, idx) => {
  setChecked(true);
  setSelectedAnswerIndex(idx);
  if(answer === correctAnswer) {
    setSelectedAnswer(true);
    console.log("true");
  } else {
    setSelectedAnswer(false);
    console.log("false");
  }
}

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };


  return (
    <Container maxWidth={{base: "md", lg: "6xl"}} minH="70vh">
      <Box border="2px solid" borderColor="jordan.300" borderRadius="lg">
        <Card bg="jordan.200">
          <CardHeader color="jordan.100">
            <Heading size="3xl">Jordan Quiz</Heading>
            {!showResult ? (
              <Heading size="xl">Question: {activeQuestion + 1} / {questions.length}</Heading>
            ) : (
              <Heading size="xl">Results:</Heading>
            )}
          </CardHeader>
          <CardBody>
            {!showResult ? (
              <>
                <Heading size="lg" color="white">{questions[activeQuestion].question}</Heading>
                {answers.map((answer, idx) => (
                  <Card key={idx} onClick={()=> onAnswerSelected(answer, idx)} m="3" bg={selectedAnswerIndex===idx ? "jordan.300" : "jordan.100"} color="jordan.200" _hover={{bg: "jordan.300", cursor: "pointer"}}>
                    <Text p="3" fontSize="xl">
                      {answer}
                    </Text>
                  </Card>
                ))}
                {checked ? (
                  <Button onClick={nextQuestion}>
                    {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                ) : (
                  <Button onClick={nextQuestion} isDisabled={true}>
                    {' '}
                    {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                )}
                </>
                ) : (
              <>
                <Heading size="lg" color="white" textAlign={"center"} pb={4}>Overall {(result.score / 25) * 100}%</Heading>
                <Box bg="jordan.100" borderRadius={"lg"}>
                  <Text p="3" fontSize="xl">
                    Total Questions: {questions.length}
                  </Text>
                  <Text p="3" fontSize="xl">
                    Total Score: {result.score}
                  </Text>
                  <Text p="3" fontSize="xl">
                    Correct Answers: {result.correctAnswers}
                  </Text>
                  <Text p="3" fontSize="xl">
                   Wrong Answers: {result.wrongAnswers}
                  </Text>
                </Box>
              </>
            )}
            
          </CardBody>
        </Card>
      </Box>
    </Container>
  )
}