import React from "react"
import ProfileTile from "./ProfileTile"
import { faHouse, faCircleUser, faArrowRightFromBracket, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { background, SimpleGrid } from '@chakra-ui/react'
import { useAppContext } from "../utils/AppContext"



export default function ProfileTileMenu() {
  const { logout } = useAppContext()

    const containerStyle = {
        display: 'flex',
        height: '60px',
        background: '#333',
    }

    const items = [
        {
            goTo : '/',
            icon : faHouse,
            exec : () => {}

        },
        {
            goTo : '/profile',
            icon : faCircleUser,
            exec : () => {}
        },
        {
            txt : "Schedule",
            goTo : '/schedule',
            icon : faCalendarDays,
            exec : logout
        },
        {
            goTo : '/login',
            icon : faArrowRightFromBracket,
            exec : logout
        }
    ]

    const createTiles = total => {
        return Array.from(items).map((item, index) => {
            return (<ProfileTile goTo={item.goTo} key={index + 1} className="tile" idx={index} icon={item.icon} exec={item.exec} />)
        })
    }

    const tiles = createTiles(6)

    return (
        <div style={containerStyle} >
            {tiles}
        </div>
    )
}