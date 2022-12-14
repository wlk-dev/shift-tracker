import React from "react"
import Tile from './Tile'
import { faCircleUser, faArrowRightFromBracket, faCalendarDays, faPhone } from '@fortawesome/free-solid-svg-icons'
import { SimpleGrid } from '@chakra-ui/react'
import { useAppContext } from "../utils/AppContext"



export default function TileMenu() {
  const { logout } = useAppContext()


    const items = [
        {
            txt : "Profile",
            goTo : '/profile',
            icon : faCircleUser,
            exec : () => {}
        },
        {
            txt : "Schedule",
            goTo : '/schedule',
            icon : faCalendarDays,
            exec : () => {}
        },
        {
            txt: "Contact",
            goTo: '/contact',
            icon: faPhone,
            exec: () => {}
        },
        {
            txt : "Logout",
            goTo : '/login',
            icon : faArrowRightFromBracket,
            exec : logout
        },
    ]

    const createTiles = () => {
        return Array.from(items).map((item, index) => {
            return (<Tile goTo={item.goTo} key={index + 1} className="tile" idx={index} txt={item.txt} icon={item.icon} exec={item.exec} />)
        })
    }

    const tiles = createTiles()

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