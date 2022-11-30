import TileMenu from "../components/TileMenu";
import Header from "../components/Header";

function Home() {

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