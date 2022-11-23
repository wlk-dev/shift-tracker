import { useAppContext } from "../utils/AppContext";

function Home() {
    const appCtx = useAppContext();
    const state = appCtx.appState

    return (
        // Grid Component
        <> 
            {state.userData.isManager && (
                <p> [show manager stuff] </p>
            )}

            <p> [show employee stuff] </p>

        </>
    )
}

export default Home;