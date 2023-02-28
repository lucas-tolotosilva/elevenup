import React, {useState} from "react";
import videobg from '../assets/videos/videobg.mp4'
import videobgmobile from '../assets/videos/videobg-mobile.mp4'

import { Nav } from './Nav'
export function Header () {
   
    return (
        <div id="home" className=" relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden text-center">
            {/* --------- Vídeo --------- */}
            <div className="absolute w-full h-full overflow-hidden">
                <video className="lg:block sm:hidden min-w-full min-h-full object-cover" src={videobg} autoPlay loop muted/>
                <video className="lg:hidden sm:absolute min-w-full min-h-full object-cover" src={videobgmobile} autoPlay loop muted/>
            </div>
            {/* --------- Fim - Vídeo --------- */}

            {/* --------- Header (logo e menu) --------- */}
            <Nav  />           
            {/* --------- Fim - Header (logo e menu) --------- */}

            
        </div> 
    )
}