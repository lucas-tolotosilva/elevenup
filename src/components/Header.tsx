import React from "react";
import videobg from '../assets/videobg.mp4'
import Nav from "./Nav";

function Header () {
    return (
        <div className="relative h-screen flex flex-col items-center justify-center text-center">
            <div className="absolute w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover" src={videobg} autoPlay loop muted/>
            </div>
            
            <Nav />
        </div> 
    )
}

export default Header;