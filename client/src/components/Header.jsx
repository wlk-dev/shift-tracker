import React from "react";
import { useLocation } from "react-router-dom"
import { useAppContext } from "../utils/AppContext"
import ProfileTileMenu from "./ProfileTileMenu";
import { Card, CardHeader, Heading, Box } from '@chakra-ui/react'


const Header = () =>{
    const {appState} = useAppContext()
    const location = useLocation() 


    return(
        <>
        <Box backgroundColor={'black'}>
            <Card>
                <CardHeader>
                    <Heading color={"white"} size='md'>Welcome back, {appState.userData.fname}</Heading>
                </CardHeader>
            {location.pathname !== "/" && (
                <ProfileTileMenu/>
            )}
            </Card>
        </Box>
        </>
    )
}

export default Header
