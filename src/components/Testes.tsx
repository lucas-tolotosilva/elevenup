import React, { useEffect, useState } from "react";
import life from '../assets/lifescience.jpg'
import healthcare from '../assets/healthcare.jpg'

export function Testes() {
   
    return(
        <div className="w-full h-420 relative">
            <img className=" w-[390px] h-[412px] margin-auto absolute top-0 bottom-0 right-0 left-0" src={life} />
            <img className="" src={healthcare} />
        </div>
        
    )
}