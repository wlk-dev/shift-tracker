import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Tile(props) {
    const [isHover, setIsHover] = useState(false);
    const { goTo, txt, icon } = props

    function msEnter() {
        setIsHover(true)
    }

    function msLeave() {
        setIsHover(false)
    }


    const tileStyle = {
        backgroundColor: "#333",
        boxShadow: "0 10px 10px #333",
        color: isHover ? "#e73c7e" : "white",
        transform: isHover && "translateY(-5px)",
        display: "flex",
        flexDirection : "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        margin: "2%",
        outline: "1px solid #E1E5F2",
        transition: ".5s"
    }

    return (
        <>
            <Link to={goTo} style={tileStyle}
                onMouseEnter={msEnter}
                onMouseLeave={msLeave}>
                    <FontAwesomeIcon style={{margin : "10%"}} icon={icon} size='6x' />
                    {txt}
            </Link>
        </>
    )
}