import React, { useEffect, useState } from "react";
import { data } from "./DataImg";
import '../styles/locomotive-scroll.css'

export function Clientes () {
    // const [scroll, handleScroll] = useState(false);
    // const [slide, handleSlide] = useState(52)
    // var lastPosition = 0
    

    // const transitionScroll = () => {
    //     var currentPosition = window.scrollY;

    //     // Cógido para 
    //     if(currentPosition > 2100){
    //         handleScroll(true);
            
    //         if(currentPosition > lastPosition){
    //             handleSlide(slide + 4)
                
    //             console.log('BAIXO')
    //         } else {
    //             console.log('CIMA')
    //         }
            
    //         lastPosition = currentPosition
    //     } else {
    //         handleScroll(false)
    //     }
    // }

    // useEffect(() => {
    //     console.log(slide)
    // }, [slide])
    // useEffect(() => {
    //     window.addEventListener("scroll", transitionScroll);
    // }, [])

    return (
        <div className="w-full">
            <h2 className="font-title w-full text-[200px]">Clientes</h2>
                      
            
            <div className="w-full bg-blue-400 mb-36"> 
                <div data-anime="left" id="client-logo" className={`flex gap-12 mb-[2000px] `}>
                    {data.map((item)=> (
                        <img key={item.id} className="cover" src={item.img} alt='imagem' />
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