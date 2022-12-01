import React from "react";
import { useAppContext } from "../utils/AppContext";
import { Card, CardHeader, Heading, Box } from '@chakra-ui/react'
import ProfileTile from "./ProfileTile"; 
import ProfileTileMenu from "./ProfileTileMenu";

const Header = () =>{

    const appCtx = useAppContext();
    const state = appCtx.appState

    return(
        <>
        <Box backgroundColor={'black'}>
            <Card>
                <CardHeader>
                    <Heading color={"white"} size='md'>Welcome back, {state.userData.fname}</Heading>
                </CardHeader>
            <ProfileTileMenu/>
            </Card>
        </Box>
        </>
    )
}

export default Header
