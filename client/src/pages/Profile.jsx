import { useAppContext } from "../utils/AppContext";
import { 
    Card,
    CardHeader, 
    CardBody, 
    CardFooter, 
    Heading, 
    Stack, 
    StackDivider, 
    Box, 
    Text 
} from '@chakra-ui/react'

function Profile() {
    const appCtx = useAppContext();
    const state = appCtx.appState

    return (
        <>
            <Card>
                <CardHeader>
                    <Heading size='md'>{state.userData.name}</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='10'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Summary
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        View a summary of all your clients over the last month.
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Overview
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        Check out the overview of your clients.
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Analysis
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        See a detailed analysis of all your business clients.
                        </Text>
                    </Box>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}

export default Profile;