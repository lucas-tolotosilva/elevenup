import React from "react"
import { Nav } from "../Nav"

export function Contato(){
    return (
        <div className="relative w-screen h-screen flex flex-col items-center justify-center text-center">
            {/* --------- Header (logo e menu) --------- */}
            <div className="w-screen h-screen absolute top-0 py-4">
                <div className="flex items-center justify-center">
                    <Nav  />           
                </div>
            </div>
            {/* --------- Fim - Header (logo e menu) --------- */} 
            <div> Aqui é a página de Contato </div>
        </div> 
    )
}