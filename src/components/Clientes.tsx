import React from "react";
import { data } from "./DataImg";
import '../styles/style.css'

export function Clientes () {
    const target = document.getElementById('client-logo')
    const animationClass = 'animate';

    function animeScroll() {
        console.log('1')
    }

    window.addEventListener('scroll', (event) => {
        animeScroll;
    })

    return (
        <div className="w-full">
            <h2 className="font-title w-full text-[200px]">Clientes</h2>
            <div className="w-full bg-blue-400 mb-36"> 
                <div data-anime="left" id="client-logo" className="flex">
                    {data.map((item)=> (
                        <img key={item.id} className="cover" src={item.img} alt='imagem' />
                    ))}
                </div>
                <div>
                    ...
                </div>
            </div>
        </div>
    )
}