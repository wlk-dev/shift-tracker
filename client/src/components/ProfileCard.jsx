import React from "react";
import { useAppContext } from "../utils/AppContext";
import UpdateUser from "./UpdateUser";
import UpdateSchedule from "./UpdateSchedule";
import DeleteShift from "./DeleteShift";
import { 
    Card,
    CardBody, 
    Heading, 
    Stack, 
    Text,
    Image,
    Divider
} from '@chakra-ui/react'

const ProfileCard = (props) =>{

    const appCtx = useAppContext();
    const state = appCtx.appState
    
    const cardStyle = {
        width: '100%',
        height: '100%',
        display: 'flex',
        textAlign: 'center'
    }
    
    return(
        <>
            <Card style={cardStyle} maxW='sm'>
                <CardBody>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{state.userData.fname}, {state.userData.lname}</Heading>
                    </Stack>
                </CardBody>
                <Divider />
                <UpdateSchedule />
                <DeleteShift />
                <UpdateUser/>
            </Card>
        </>
    )
}

export default ProfileCard