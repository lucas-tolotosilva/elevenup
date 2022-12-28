import React from "react";
import { Healthcare, Lifescience } from "./SegTextos";
import { Slider } from "./Slider";

export function Segmentos (){
    return(
        <div className="">
            <h2 className="font-title w-full text-[200px]">Segmentos</h2>
            <div className="w-[1440px] flex mb-36"> 
                <div className="w-6/12">
                    <Slider />
                </div>
                <div className="w-6/12">
                    <Healthcare />
                    
                </div>
            </div>
        </div>
    )
}

