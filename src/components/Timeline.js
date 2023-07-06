import {
    Box,
    chakra,
    Container,
    Text,
    HStack,
    VStack,
    Flex,
    useColorModeValue,
    useBreakpointValue
} from '@chakra-ui/react';

const milestones = [
    {
        id: 1,
        date: 'November 3, 2022',
        title: 'Wingstop Era',
        description: `Jordan and I were getting Wingstop every week and mukbanging in the car. This was a time of full bellies and poor health`
    },
    {
        id: 2,
        date: 'December 22, 2022',
        title: 'Graduation Era',
        description: `Jordan Graduated with her first college degree. Wowza girlboss pussy slay boots the house down purr yass queen!`
    },
    {
        id: 3,
        date: 'January 27, 2023',
        title: 'Minecraft Era',
        description:
            'Brief Minecraft era when Jordan had time to play with Rowan, Sophie, Jonathan, and I. Twas good times and we need to go back to them'
    },
    {
        id: 4,
        date: 'May 25, 2023',
        title: 'Gym Era',
        description:
            'Jordan and I start going to the gym to get yolked and shredded and diced'
    },
    {
        id: 5,
        date: 'July 1, 2023',
        title: 'Birthday Time',
        description:
            'Time to run it back for another epic birthday B) Everybody say Happy Birthday Jordan'
    }
];

const Timeline = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
            <chakra.h3 fontSize="6xl" fontWeight="bold" mb={18} textAlign="center" color="jordan.100">
                The Jordan Timeline
            </chakra.h3>
            {milestones.map((milestone) => (
                <Flex key={milestone.id} mb="10px">
                    {/* Desktop view(left card) */}
                    {isDesktop && milestone.id % 2 === 0 && (
                        <>
                            <EmptyCard />
                            <LineWithDot />
                            <Card {...milestone} />
                        </>
                    )}

                    {/* Mobile view */}
                    {isMobile && (
                        <>
                            <LineWithDot />
                            <Card {...milestone} />
                        </>
                    )}

                    {/* Desktop view(right card) */}
                    {isDesktop && milestone.id % 2 !== 0 && (
                        <>
                            <Card {...milestone} />

                            <LineWithDot />
                            <EmptyCard />
                        </>
                    )}
                </Flex>
            ))}
        </Container>
    );
};


const Card = ({ id, title, description, date }) => {
    // For even id show card on left side
    // For odd id show card on right side
    const isEvenId = id % 2 == 0;
    let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
    let leftValue = isEvenId ? '-15px' : 'unset';
    let rightValue = isEvenId ? 'unset' : '-15px';

    const isMobile = useBreakpointValue({ base: true, md: false });
    if (isMobile) {
        leftValue = '-15px';
        rightValue = 'unset';
        borderWidthValue = '15px 15px 15px 0';
    }

    return (
        <HStack
            flex={1}
            p={{ base: 3, sm: 6 }}
            bg="jordan.100"
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
            _before={{
                content: `""`,
                w: '0',
                h: '0',
                borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
                borderStyle: 'solid',
                borderWidth: borderWidthValue,
                position: 'absolute',
                left: leftValue,
                right: rightValue,
                display: 'block'
            }}
            transition="transform .2s"
            _hover={{transform: 'scale(1.1)'}}
        >
            <Box>
                <Text fontSize="lg" color={isEvenId ? 'white' : 'white'}>
                    {date}
                </Text>

                <VStack spacing={2} mb={3} textAlign="left">
                    <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
                        {title}
                    </chakra.h1>
                    <Text fontSize="md">{description}</Text>
                </VStack>
            </Box>
        </HStack>
    );
};

const LineWithDot = () => {
    return (
        <Flex
            pos="relative"
            alignItems="center"
            mr={{ base: '40px', md: '40px' }}
            ml={{ base: '0', md: '40px' }}
        >
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor="jordan.300"
                top="0px"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    top="0"
                    left="0"
                    bottom="0"
                    right="0"
                    width="100%"
                    height="100%"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    bg="jordan.500"
                    borderRadius="100px"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};

const EmptyCard = () => {
    return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Timeline;