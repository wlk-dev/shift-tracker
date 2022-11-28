import React from "react";
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
    Text,
    Image,
    Divider,
    ButtonGroup,
    Button 
} from '@chakra-ui/react'

const ProfileCard = (props) =>{

    const appCtx = useAppContext();
    const state = appCtx.appState

    const cardStyle={
        border: "3px solid black",
        margin: "10px"
    }
    
    return(
        <>
            <Card maxW='sm' style={cardStyle}>
                <CardBody>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{state.userData.name}</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
            </Card>
        </>
    )
}

export default ProfileCard