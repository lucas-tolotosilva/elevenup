import React from "react"
import { Footer } from "../Footer"
import { Nav } from "../Nav"

export function Cases(){
    return (
        <div className="bg-gray-200 overflow-x-hidden">
            <div className="relative w-screen h-screen flex flex-col items-center justify-center text-center mb-96 ">
                {/* --------- Header (logo e menu) --------- */}
                <Nav  />           
                {/* --------- Fim - Header (logo e menu) --------- */} 
                <div className="max-w-[1280px] bg-gray-200 absolute top-40">
                    <h1 className="font-default tracking-wider mb-20 font-bold text-[70px]">Cases</h1>
                    <div className="w-full flex flex-wrap overflow-hidden gap-10">
                        oi
                    </div>
                </div>
            </div>
                <div className='flex items-center justify-center'>
                    <Footer />
                </div>
        </div>  
    )
}