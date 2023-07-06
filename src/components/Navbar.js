import NextLink from 'next/link';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [
  { label: 'Home', href: '/' },
  { label: 'Birthday Wishes', href: '/BirthdayWishes' },
  { label: 'Birthday Quiz', href: '/BirthdayQuiz' },
  { label: 'A Lil Somethin Somethin', href: '/SomethinSomethin' },
];

const NavLink = ({ children, href }) => (
  <Link
    as={NextLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'jordan.300',
    }}
    href={href}
  >

    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="jordan.100" px={10}
        borderBottomWidth={2}
        borderStyle={'solid'}
        borderColor="jordan.300">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg="jordan.200"
            color="jordan.100"
            fontSize="20px"
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              color="jordan.200"
              fontSize="25"
              fontWeight="700">
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    '/mushroom.svg'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link as={NextLink} href="/BirthdayWishes/WishSubmission">Wish submission</Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Link as={NextLink} href="https://typescript-page-jtcfred.vercel.app/" target="_blank" rel="noopener noreferrer">Personal Site</Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Link as={NextLink} href="">Spotify Playlist</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}