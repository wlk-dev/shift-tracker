import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Cookie from "js-cookie"

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signUpCreds, setSignUpCreds] = useState({ fname: "", lname: "", email: "", password: "" });

  const [formMessage, setFormMessage] = useState({ type: "", msg: "" })

  function validateCreds() {
    const { email, password } = signUpCreds
    const valid = { email: false, password: false }

    const eReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const pReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/

    if (!eReg.test(email)) {
      return valid
    }
    valid.email = true

    if (!pReg.test(password)) {
      return valid
    }
    valid.password = true

    return valid
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setFormMessage({ type: "", msg: "" })

    const validCreds = validateCreds()

    if (!validCreds.email) {
      setFormMessage({ type: "error", msg: "Not a valid email." })
      return
    }

    if (!validCreds.password) {
      setFormMessage({ type: "error", msg: "Not a valid password." })
      return
    }

    const createUser = await fetch("/api/user/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpCreds)
    })

    const authResult = await createUser.json()

    if (authResult.result === "success") {
      Cookie.set("auth-token", authResult.token)
      window.location.href = '/'
    } else {
      setFormMessage({ type: "error", msg: "We could not sign you up with the credentials provided, make sure all fields are filled out." })
    }

    setSignUpCreds({ fname: "", lname: "", email: "", password: "" })
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text"
                    name='fname'
                    placeholder='John'
                    value={signUpCreds.fname}
                    onChange={(e) => setSignUpCreds({ ...signUpCreds, [e.target.name]: e.target.value })}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text"
                    name='lname'
                    placeholder='Doe'
                    value={signUpCreds.lname}
                    onChange={(e) => setSignUpCreds({ ...signUpCreds, [e.target.name]: e.target.value })} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"
                name='email'
                placeholder='email@service.com'
                value={signUpCreds.email}
                onChange={(e) => setSignUpCreds({ ...signUpCreds, [e.target.name]: e.target.value })}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={signUpCreds.password}
                  onChange={(e) => setSignUpCreds({ ...signUpCreds, [e.target.name]: e.target.value })}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSignup}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link href="/login" color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
        {
          formMessage.msg.length > 0 && (
            <Alert status={formMessage.type}>
              <AlertIcon />
              <AlertTitle>Sign Up Failed!</AlertTitle>
              <AlertDescription>{formMessage.msg}</AlertDescription>
            </Alert>
          )
        }
      </Stack>
    </Flex>
  );
}

export default Signup