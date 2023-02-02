import React from "react"
import { Nav } from "../Nav"

export function Equipe(){
    return (
        <div className="bg-gray-200 relative w-screen h-screen flex flex-col items-center justify-center text-center">
            {/* --------- Header (logo e menu) --------- */}
            <Nav  />           
            {/* --------- Fim - Header (logo e menu) --------- */} 
            <div> Aqui é a Equipe </div>
        </div> 
    )
}