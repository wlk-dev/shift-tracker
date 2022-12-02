import ProfileContact from "../components/ProfileContact";
import ProfileCard from "../components/ProfileCard";
import { Grid, GridItem, Spinner, SimpleGrid } from '@chakra-ui/react'
import EmpTL from "../components/EmpTL"
import Header from "../components/Header";
import { useAppContext } from "../utils/AppContext"
import { useEffect, useState } from "react"

function Profile() {

  const [myData, setMyData] = useState(null)
  const [ready, setReady] = useState(false)
  const { appState } = useAppContext();

  useEffect(() => {
    const getUser = async () => {
      const query = await fetch(`/api/shift/${appState.userData._id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })

      const qResult = await query.json()

      setMyData({ data: { ...qResult.payload } })
      setReady(true)
    }

    if (appState.userData._id !== undefined) {
      getUser()
    }
  }, [appState])

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Header />
      <Grid
        templateAreas={`"nav main"`}
        gridTemplateRows={'repeat(2 , 1fr)'}
        gridTemplateColumns={'repeat(5, 1fr)'}
        h='400px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
        style={{ paddingBottom: '5px', paddingTop: '5px', }}
      >
        <GridItem colSpan={2} pl='2' bg='#DEB887' area={'nav'}>
          <ProfileCard />
        </GridItem>
        <GridItem colSpan={4} pl='2' h='' bg='#DEB887' area={'main'}>
          <ProfileContact />
        </GridItem>
        {ready ? (
          <GridItem colSpan={12}>
            <EmpTL blah={myData} />
          </GridItem>
        ) : (
          <Spinner />
        )}
      </Grid>
    </div>
  )
}

export default Profile;