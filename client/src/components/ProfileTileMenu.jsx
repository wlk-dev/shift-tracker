import React from "react"
import ProfileTile from "./ProfileTile"
import { useLocation } from "react-router-dom"
import { faHouse, faCircleUser, faArrowRightFromBracket, faCalendarDays, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useAppContext } from "../utils/AppContext"



export default function ProfileTileMenu() {
  const location = useLocation();
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
            exec : () => {}
        },
        {
            txt: "Contact",
            goTo: '/contact',
            icon: faPhone,
            exec: () => {}
        },
        {
            goTo : '/login',
            icon : faArrowRightFromBracket,
            exec : logout
        }
    ]

    const createTiles = () => {
        return Array.from(items).map((item, index) => {
            if (location.pathname !== item.goTo) {
                return (<ProfileTile goTo={item.goTo} key={index + 1} className="tile" idx={index} icon={item.icon} exec={item.exec} />)
            }
        })
    }

    const tiles = createTiles()

    return (
        <div style={containerStyle} >
            {tiles}
        </div>
    )
}