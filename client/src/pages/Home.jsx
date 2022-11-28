import { useAppContext } from "../utils/AppContext";

import { Card, CardHeader, Heading, Box } from '@chakra-ui/react'

import TileMenu from "../components/TileMenu";

function Home() {
    const appCtx = useAppContext();
    const state = appCtx.appState

    return (
        // Grid Component
        <div style={{ backgroundColor: "#BFDBF7" }}>

            <Box backgroundColor={'#333'}>
                <Card>
                    <CardHeader>
                        <Heading color={"white"} size='md'>Welcome back, {state.userData.name}</Heading>
                    </CardHeader>
                </Card>

            </Box>

            {/* {state.userData.isManager && (
                <p> [show manager stuff] </p>
            )}

            <p> [show employee stuff] </p> */}

            <TileMenu />

        </div>
    )
}

export default Home;