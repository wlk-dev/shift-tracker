import React from "react"
import Tile from './Tile'

export default function TileMenu() {
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

        backdropFilter : "blur(10px)",
        webkitBackdropFilter : "blur(10px)",

        display : "grid",

        gridTemplateColumns: `repeat(3, 1fr)`,
        grindTemplateRows: `repeat(3, 1fr)`
    }

    const items = [
        {
            txt : "Home",
            goTo : '/home'
        },
        {
            txt : "Profile",
            goTo : '/profile'
        },
        {
            txt : "Login",
            goTo : '/logout'
        }
    ]

    const createTiles = total => {
        return Array.from(items).map((item, index) => {
            return (<Tile goTo={item.goTo} key={index + 1} className="tile" idx={index} txt={item.txt} ></Tile>)
        })
    }

    const tiles = createTiles(6)

    return (
        <div style={containerStyles} >
            <div style={tilesStyle} >
                {tiles}
            </div>
        </div>
    )
}