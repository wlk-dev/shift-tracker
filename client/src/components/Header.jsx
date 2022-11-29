import React from "react";
import { useAppContext } from "../utils/AppContext";
import { Card, CardHeader, Heading, Box } from '@chakra-ui/react'

const Header = () =>{

    const appCtx = useAppContext();
    const state = appCtx.appState

    return(
        <>
        <Box backgroundColor={'black'}>
            <Card>
                <CardHeader>
                    <Heading color={"white"} size='md'>Welcome back, {state.userData.name}</Heading>
                </CardHeader>
            </Card>
        </Box>
        </>
    )
}

export default Header
