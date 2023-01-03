import React, { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import { data } from "./DataImg";


export function Testes() {
    

    return(
        <ParallaxProvider>
            <Parallax translateX={[-20, 20]}>
                <div className="w-full mb-36"> 
                    <div data-anime="left" id="client-logo" className={`flex gap-12 `}>
                        {data.map((item, indice)=> (
                            <img id="img" key={item.id} className="grayscale hover:grayscale-0 hover:cursor-pointer" src={item.img} alt='imagem' />
                        ))}
                    </div>
                </div>
            </Parallax>
            <Parallax translateX={[10, -20]}>
                <div className="w-full mb-36"> 
                    <div data-anime="left" id="client-logo" className={`flex gap-12 mb-[2000px] `}>
                        {data.map((item, indice)=> (
                            <img key={item.id} className="cover grayscale" src={item.img} alt='imagem' />
                        ))}
                    </div>
                </div>

            </Parallax>
        </ParallaxProvider>
        
    )
}