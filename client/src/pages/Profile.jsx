import { useAppContext } from "../utils/AppContext";

function Profile() {
    const appCtx = useAppContext();
    const state = appCtx.appState

    return (
        <>
            <p>{state.userData.name}</p>
        </>
    )
}

export default Profile;