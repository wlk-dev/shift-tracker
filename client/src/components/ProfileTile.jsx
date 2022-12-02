import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ProfileTile(props) {
    const [isHover, setIsHover] = useState(false);
    const { goTo, icon, exec } = props

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
        backgroundColor: "#333",
        boxShadow: !isHover && "0 7px",
        color: isHover ? "#grey" : "white",
        transform: isHover && "translateY(5px)",
        display: "flex",
        flexDirection : "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        transition: ".5s",
        width: '100%',
    }

    return (
            <Link to={goTo} style={tileStyle}
                onMouseEnter={msEnter}
                onMouseLeave={msLeave}
                onClick={exec}
                >
                    <FontAwesomeIcon style={{margin : "5%"}} icon={icon} size='3x' />
            </Link>
    )
}