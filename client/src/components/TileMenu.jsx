import React from "react"
import Tile from './Tile'
import { faHouse, faCircleUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { SimpleGrid } from '@chakra-ui/react'
import { useAppContext } from "../utils/AppContext"



export default function TileMenu() {
  const { logout } = useAppContext()


    const containerStyles = {
        display: "grid",
        height: "100vh",
        overflow: "hidden",
        margin: "0px",
        alignItems: "center",
        justifyContent: "center"
    }

    const tilesStyle = {
        // backgroundColor: "#333",
        // boxShadow: "0 0 10px #022B3A",
        height: `40vh`,
        width: `60vw`,

        // backdropFilter : "blur(10px)",
        // WebkitBackdropFilter : "blur(10px)",

        display : "grid",

        gridTemplateColumns: `repeat(3, 1fr)`,
        grindTemplateRows: `repeat(3, 1fr)`
    }

    const items = [
        {
            txt : "Home",
            goTo : '/',
            icon : faHouse,
            exec : () => {}

        },
        {
            txt : "Profile",
            goTo : '/profile',
            icon : faCircleUser,
            exec : () => {}
        },
        {
            txt : "Logout",
            goTo : '/logout',
            icon : faArrowRightFromBracket,
            exec : logout
        }
    ]

    const createTiles = total => {
        return Array.from(items).map((item, index) => {
            return (<Tile goTo={item.goTo} key={index + 1} className="tile" idx={index} txt={item.txt} icon={item.icon} exec={item.exec} />)
        })
    }

    const tiles = createTiles(6)

    return (
        <div style={{height : "100vh"}} >
            <SimpleGrid columns={[1, 3]} spacing={5} minChildWidth='120px'>
                {tiles}
            </SimpleGrid>
            {/* <div style={tilesStyle} >
                {tiles}
            </div> */}
        </div>
    )
}