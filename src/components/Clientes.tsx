import React, { useEffect, useState } from "react";
import { data } from "./DataImg";
import '../styles/locomotive-scroll.css'
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

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
            
            
            <div data-scroll-container>
            <div data-scroll-section>
                <h1 data-scroll>Hey</h1>
                <p data-scroll>👋</p>
            </div>
            <div data-scroll-section>
                <h2 data-scroll data-scroll-speed="1">What's up?</h2>
                <p data-scroll data-scroll-speed="2">😬</p>
            </div>
        </div>
            
            
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