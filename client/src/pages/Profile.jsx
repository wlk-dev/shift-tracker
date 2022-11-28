import { useAppContext } from "../utils/AppContext";
import ProfileContact from "../components/ProfileContact";
import ProfileCard from "../components/ProfileCard";

function Profile() {

    const divStyle={
        display: "flex",
        justifyContent: "center"
    }

    return (
        <div style={divStyle}>
            <ProfileCard />
            <ProfileContact/>

        </div>
    )
}

export default Profile;