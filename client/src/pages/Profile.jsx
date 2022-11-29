import ProfileContact from "../components/ProfileContact";
import ProfileCard from "../components/ProfileCard";
import { Grid, GridItem } from '@chakra-ui/react'
import ProfileTileMenu from "../components/ProfileTileMenu";
import Header from "../components/Header";

function Profile() {

    return (
        <div style={{ backgroundColor: "whitesmoke" }}>
            <Header/>
            <Grid
                templateAreas={`"nav main"`}
                gridTemplateRows={ '1fr'}
                gridTemplateColumns={'300px 1fr'}
                h='400px'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
                style={{paddingBottom: '5px', paddingTop: '5px',}}
                >
                <GridItem pl='2' bg='#DEB887' area={'nav'}>
                    <ProfileCard />
                </GridItem>
                <GridItem pl='2' h='' bg='#DEB887' area={'main'}>
                    <ProfileContact/>
                </GridItem>
            </Grid>
            <ProfileTileMenu/>
        </div>
    )
}

export default Profile;