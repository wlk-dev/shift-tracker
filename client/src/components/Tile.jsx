import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Tile(props) {
    const [isHover, setIsHover] = useState(false);
    const { goTo, txt } = props

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
        transform : isHover && "translateY(-5px)",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        margin: "2%",
        outline: "1px solid #E1E5F2",
        transition : ".5s"
    }

    return (
        <Link to={goTo} style={tileStyle}
            onMouseEnter={msEnter}
            onMouseLeave={msLeave}>
                {txt}
        </Link>
    )
}