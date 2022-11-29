import { useState } from "react"
import Cookie from "js-cookie"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Alert,
    AlertIcon,
    AlertDescription,
    AlertTitle,
    Text,
    Link,
} from '@chakra-ui/react';

const LoginPage = (props) => {
    const [loginCreds, setLoginCreds] = useState({ email: "", password: "" })
    const [formMessage, setFormMessage] = useState({ type: "", msg: "" })

    const handleLogin = async (e) => {
        e.preventDefault()
        setFormMessage({ type: "", msg: "" })

        const authCheck = await fetch("/api/user/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginCreds)
        })

        const authResult = await authCheck.json()

        // If the login was good, save the returned token as a cookie
        if (authResult.result === "success") {
            Cookie.set("auth-token", authResult.token)
            setFormMessage({ type: "success", msg: "Your login was successful. Proceed!" })
            window.location.href = '/'
        } else {
            setFormMessage({ type: "error", msg: "We could not log you in with the credentials provided." })
        }

        setLoginCreds({ email: "", password: "" })
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email"
                                name="email"
                                placeholder="Enter email"
                                value={loginCreds.email}
                                onChange={(e) => setLoginCreds({ ...loginCreds, [e.target.name]: e.target.value })} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password"
                                name="password"
                                placeholder="Password"
                                value={loginCreds.password}
                                onChange={(e) => setLoginCreds({ ...loginCreds, [e.target.name]: e.target.value })} />
                        </FormControl>
                        <Stack spacing={4}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={handleLogin}>
                                Sign in
                            </Button>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Don't have an account? <Link href="/signup" color={'blue.400'}>Sign Up</Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
                {
                    formMessage.msg.length > 0 && (
                        <Alert status={formMessage.type}>
                            <AlertIcon />
                            <AlertTitle>Login {formMessage.type}!</AlertTitle>
                            <AlertDescription>{formMessage.msg}</AlertDescription>
                        </Alert>
                    )
                }
            </Stack>
        </Flex>
    )
}

export default LoginPage