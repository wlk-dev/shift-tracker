import React from 'react'
import { 
    Card,
    CardHeader, 
    CardBody, 
    Heading, 
    Stack, 
    StackDivider,
    Box, 
    Text,
} from '@chakra-ui/react'
import { useAppContext } from "../utils/AppContext"

const ProfileContact = (props) =>{

    const {appState} = useAppContext()

    const cardStyle = {
        width: '100%',
        height: '100%',
    }

    return(
        <>
            <Card style={cardStyle}>
                <CardHeader>
                    <Heading size='md'>Contact</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='10'>
                    <Box style={{ display: 'flex' }}>
                        <Heading size='sm' textTransform='uppercase'>
                        Phone Number:
                        </Heading>
                        <Text style={{ paddingLeft: '10px'}}fontSize='sm'>
                        {appState.userData.contactNum}
                        </Text>
                    </Box>
                    <Box style={{ display: 'flex' }}>
                        <Heading size='sm' textTransform='uppercase'>
                        email:
                        </Heading>
                        <Text style={{ paddingLeft: '10px'}}fontSize='sm'>
                        {appState.userData.email}
                        </Text>
                    </Box>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}

export default ProfileContact