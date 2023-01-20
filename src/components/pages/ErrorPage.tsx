import React from "react"
import "../../styles/style.css"

export function ErrorPAge(){
    return (
        <div className="relative w-screen h-screen flex flex-col items-center justify-center text-center">
            
            <div className="site">
                <div className="sketch">
                    <div className="bee-sketch red"></div>
                    <div className="bee-sketch blue"></div>
                </div>

                <h1>404:
                <small>Players Not Found</small></h1>
            </div>
        </div> 
    )
}