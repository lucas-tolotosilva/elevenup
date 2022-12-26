import React from "react";
import videobg from '../assets/videobg.mp4'
import logo from '../assets/logo.png'

function Header () {
    return (
        <div className="relative h-screen flex flex-col items-center justify-center text-center">
            <div className="absolute w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover" src={videobg} autoPlay loop muted/>
            </div>
            <div className="w-full h-full absolute top-4 m-0 overflow-hidden">
                <div className="flex items-center justify-center">
                    <div className="w-10/12 flex items-center justify-between">
                        <img className="w-48" src={logo}></img>

                        <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" > 
                            <path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z" fill="currentColor" /> 
                            <path d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z" fill="currentColor" /> 
                            <path d="M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H11Z" fill="currentColor" /> 
                        </svg>

                    </div>
                    
                </div>
            </div> 
            
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