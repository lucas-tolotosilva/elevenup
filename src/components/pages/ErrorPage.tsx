import React from "react"
import { Link } from "react-router-dom"
import "../../styles/style.css"

export function ErrorPAge(){
    return (
        <div className="relative overflow-hidden w-screen h-screen flex flex-col items-center justify-center text-center">
            
            <div className="site">
                <div className="sketch">
                    <div className="bee-sketch red"></div>
                    <div className="bee-sketch blue"></div>
                </div>

                <h1>404:
                <small>Players Not Found</small></h1>
            </div>
            <Link to="/"><button className="bg-blue-800 rounded-full py-3 px-8 text-white-100"> Home</button></Link>
        </div> 
    )
}