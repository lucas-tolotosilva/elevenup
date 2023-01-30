import React from "react"
import { Link } from "react-router-dom"
import virus from "../../assets/virus.png"
export function ErrorPAge(){
    return (
        <div className="relative overflow-hidden w-screen h-screen flex flex-col items-center justify-center text-center">
            
            <div className="flex justify-center items-center gap-8">
                <div className="w-[400px] h-[400px]">
                    <img src={virus} />
                </div>

                <div>
                    <h1 className="font-default text-7xl">404:
                    <small>Players Not Found</small></h1>
                    <Link to="/"><button className="bg-blue-800 rounded-full py-3 mt-10 px-8 text-white-100"> Home</button></Link>
                </div>
               
            </div>
        </div> 
    )
}