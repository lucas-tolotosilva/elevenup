import React from "react";
import videobg from '../assets/videobg.mp4'
import logo from '../assets/logo.png'
import { BiMenuAltRight } from "react-icons/bi";

export function Header () {
    return (
        <div className="relative h-screen flex flex-col items-center justify-center text-center">
            {/* --------- Vídeo --------- */}
            <div className="absolute w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover" src={videobg} autoPlay loop muted/>
            </div>
            {/* --------- Fim - Vídeo --------- */}

            {/* --------- Header (logo e menu) --------- */}
            <div className="min-w-[1440px] absolute top-0 py-4">
                <div className="flex items-center justify-center">
                    <div className="w-full flex items-center justify-between">
                        <img className="w-36" src={logo}></img>
                        <div>
                            <BiMenuAltRight size={40} />
                        </div>
                    </div>        
                </div>
            </div>
            {/* --------- Fim - Header (logo e menu) --------- */}
        </div> 
    )
}