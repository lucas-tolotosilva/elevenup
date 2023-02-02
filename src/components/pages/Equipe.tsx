import React from "react"
import { Nav } from "../Nav"

export function Equipe(){
    return (
        <div className="bg-gray-200 relative w-screen h-screen flex flex-col items-center justify-center text-center">
            {/* --------- Header (logo e menu) --------- */}
            <Nav  />           
            {/* --------- Fim - Header (logo e menu) --------- */} 
            <div className="bg-black-900 max-w-[1280px] absolute top-28">
                <div className="w-full bg-gray-700">
                    ...
                </div>
            </div>
        </div> 
    )
}