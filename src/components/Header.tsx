import React, {useState} from "react";
import videobg from '../assets/videobg.mp4'

import dnaIcon from '../assets/dna.png' 
import { Nav } from './Nav'
export function Header () {
   
    return (
        <div className="relative w-screen h-screen flex flex-col items-center justify-center text-center">
            {/* --------- Vídeo --------- */}
            <div className="absolute w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover" src={videobg} autoPlay loop muted/>
            </div>
            {/* --------- Fim - Vídeo --------- */}

            {/* --------- Header (logo e menu) --------- */}
            <div className="w-screen h-screen absolute top-0 py-4">
                <div className="flex items-center justify-center">
                    <Nav  />           
                </div>
            </div>
            {/* --------- Fim - Header (logo e menu) --------- */}

            
        </div> 
    )
}