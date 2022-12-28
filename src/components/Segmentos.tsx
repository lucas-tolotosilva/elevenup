import React from "react";
import { Slider } from "./Slider";

export function Segmentos (){
    return(
        <div className="text-center">
            <h2 className="font-title w-full text-[200px]">Segmentos</h2>
            <div className="w-[1440px] flex mb-36"> 
                <div className="w-6/12">
                    <Slider />
                </div>
                <div className="w-6/12 bg-purple-400">
                    
                </div>
            </div>
        </div>
    )
}

