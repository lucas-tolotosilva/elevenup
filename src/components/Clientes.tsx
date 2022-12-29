import React from "react";
import { data } from "./DataImg";

export function Clientes () {
    return (
        <div className="w-full">
            <h2 className="font-title w-full text-[200px]">Clientes</h2>
            <div className="w-full bg-blue-400 mb-36"> 
                <div className="contain flex mx-4 w-[100px]">
                    {data.map((item)=> (
                        <img className="cover" src={item.img} alt='testa' />
                    ))}
                </div>
                <div>
                    {data.map((item)=> (
                        <img src={item.img} alt='testa' />
                    ))}
                </div>
            </div>
        </div>
    )
}