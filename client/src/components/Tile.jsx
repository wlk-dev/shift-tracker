import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Tile(props) {
    const [isHover, setIsHover] = useState(false);
    const { goTo, txt, icon, exec } = props

    function msEnter() {
        setIsHover(true)
    }

    function msLeave() {
        setIsHover(false)
    }

    const tileStyle = {
        boxSizing : "border-box",
        WebkitBoxSizing : "border-box",
        MozBoxSizing: "border-box",
        backgroundColor: "black",
        boxShadow: !isHover && "0 7px #B388EB",
        color: isHover ? "#B388EB" : "white",
        transform: isHover && "translateY(5px)",
        display: "flex",
        flexDirection : "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        margin: "2%",
        transition: ".5s",
    }

    return (
            <Link to={goTo} style={tileStyle}
                onMouseEnter={msEnter}
                onMouseLeave={msLeave}
                onClick={exec}
                >
                    <FontAwesomeIcon style={{margin : "5%"}} icon={icon} size='5x' />
                    <p style={{margin : "2%"}} >{txt}</p>
            </Link>
    )
}