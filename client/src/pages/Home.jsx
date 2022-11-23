import { useAppContext } from "../utils/AppContext";

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function Home() {
    const appCtx = useAppContext();
    const state = appCtx.appState

    return (
        // Grid Component
        <>

            <Card>
                <CardBody>
                    <p>Welcome back, {state.userData.name}.</p>
                </CardBody>
            </Card>

            {state.userData.isManager && (
                <p> [show manager stuff] </p>
            )}

            <p> [show employee stuff] </p>

        </>
    )
}

export default Home;