import React, { useEffect, useState } from "react";
import { data } from "./DataImg";

export function Clientes () {
    
    return (
        <div className="w-full">
            <h2 className="font-title w-full text-[200px]">Clientes</h2>
                      
            
            <div className="w-full bg-blue-400 mb-36"> 
                <div data-anime="left" id="client-logo" className={`flex gap-12 mb-[2000px] `}>
                    {data.map((item)=> (
                        <img key={item.id}  className={``} src={item.img} alt='imagem' />
                    ))}
                </div>

                <div>
                    <div className="font-title text-6xl">    
                       
                    </div>
                </div>
            </div>
        </div>
    )
}