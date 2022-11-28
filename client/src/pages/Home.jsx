import { useAppContext } from "../utils/AppContext";

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import TileMenu from "../components/TileMenu";

function Home() {
    const appCtx = useAppContext();
    const state = appCtx.appState

    return (
        // Grid Component
        <div style={{backgroundColor : "#BFDBF7"}}>

            <Card>
                <CardBody>
                    <p>Welcome back, {state.userData.name}.</p>
                </CardBody>
            </Card>

            {/* {state.userData.isManager && (
                <p> [show manager stuff] </p>
            )}

            <p> [show employee stuff] </p> */}

            <TileMenu />

        </div>
    )
}

export default Home;