import React from 'react'
import { 
    Card,
    CardHeader, 
    CardBody, 
    CardFooter, 
    Heading, 
    Stack, 
    StackDivider,
    Box, 
    Text,
} from '@chakra-ui/react'

const ProfileContact = (props) =>{

    const cardStyle={
        border: "3px solid black",
        margin: "10px",
        width: "50%"
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
                        (123) 456-7890
                        </Text>
                    </Box>
                    <Box style={{ display: 'flex' }}>
                        <Heading size='sm' textTransform='uppercase'>
                        email:
                        </Heading>
                        <Text style={{ paddingLeft: '10px'}}fontSize='sm'>
                        exampleEmail@email.com
                        </Text>
                    </Box>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}

export default ProfileContact