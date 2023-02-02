import React from "react"
import { Footer } from "../Footer"
import { Nav } from "../Nav"
import img from "../../assets/quem-somos.jpg"
export function QuemSomos(){
    return (
        <div className="relative bg-gray-200 w-screen h-screen flex flex-col items-center text-center">
            {/* --------- Header (logo e menu) --------- */}
            <Nav  />           
            
            {/* --------- Fim - Header (logo e menu) --------- */} 
           

            
        </div> 
    )
}