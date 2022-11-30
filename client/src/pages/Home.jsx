import { useAppContext } from "../utils/AppContext";

import { Card, CardHeader, Heading, Box } from '@chakra-ui/react'

import TileMenu from "../components/TileMenu";
import Header from "../components/Header";

function Home() {
    const appCtx = useAppContext();
    const state = appCtx.appState

    return (
        // Grid Component
        <div style={{ backgroundColor: "whitesmoke" }}>
            <Header/>

            {/* {state.userData.isManager && (
                <p> [show manager stuff] </p>
            )}

            <p> [show employee stuff] </p> */}

            <TileMenu />

        </div>
    )
}

export default Home;