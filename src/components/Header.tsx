import React from "react";
import videobg from '../assets/videobg.mp4'

function Header () {
    return (
        <video src={videobg} autoPlay loop muted /> 
    )
}

export default Header;