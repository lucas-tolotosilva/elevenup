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
            
            {/* <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video className="min-w-full min-h-full absolute object-cover" src="https://josecuono.dev/video1.mp4" type="video/mp4" autoplay muted loop></video>
                </div>
                <div className="video-content space-y-2">
                    <h1 className="font-light text-6xl">full Hero Video</h1>
                    <h3 className="font-light text-3xl">with TailwindCSS</h3>
                </div>
            </section> */}
        </div> 
    )
}

export default Header;