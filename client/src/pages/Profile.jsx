import ProfileContact from "../components/ProfileContact";
import ProfileCard from "../components/ProfileCard";
import { Grid, GridItem } from '@chakra-ui/react'
import ProfileTileMenu from "../components/ProfileTileMenu";
import EmpTL from "../components/EmpTL"
import Header from "../components/Header"
import { useState, useEffect } from "react"
import { useAppContext } from "../utils/AppContext";

function Profile() {

  const {appState, setAppState} = useAppContext()
  const {shiftData, setShiftData} = useState({})

  const getShift = async () => {

    const update = await fetch(`/api/shift/${appState.userData._id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    })

    const result = await update.json()

    setShiftData(result.payload)
  }

  useEffect(() => {
    getShift()
  }, [appState])

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Header />
      <Grid
        templateAreas={`"nav main"`}
        gridTemplateRows={'1fr'}
        gridTemplateColumns={'300px 1fr'}
        h='400px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
        style={{ paddingBottom: '5px', paddingTop: '5px', }}
      >
        <GridItem pl='2' bg='#DEB887' area={'nav'}>
          <ProfileCard />
        </GridItem>
        <GridItem pl='2' h='' bg='#DEB887' area={'main'}>
          <ProfileContact />
        </GridItem>
      </Grid>
      <EmpTL shifts={shiftData}/>
      <ProfileTileMenu />
    </div>
  )
}

export default Profile;