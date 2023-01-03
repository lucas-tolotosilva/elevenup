import React, { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import { data } from "./DataImg";


export function Testes() {
    const [hover, setHover] = useState(true)

    const handleHoverOn = () => {
        setHover(false)
        console.log(hover)
    } 

    const handleHoverOut = () => {
        setHover(true)
        console.log(hover)
    } 

    function loop () {
        for(var i=1; i <= data.length ; i++){
            return i;
        }
    }

    return(
        <ParallaxProvider>
            <Parallax translateX={[-20, 10]}>
                <div className="w-full mb-36"> 
                    <div data-anime="left" id="client-logo" className={`flex gap-12 `}>
                        {data.map((item)=> (
                            <img id="img" key={item.id} onMouseOut={handleHoverOut} onMouseOver={handleHoverOn} src={`${!hover ? item.img : item.imgncolor}`} alt='imagem' />
                        ))}
                    </div>
                </div>
            </Parallax>
            <Parallax translateX={[10, -20]}>
                <div className="w-full mb-36"> 
                    <div data-anime="left" id="client-logo" className={`flex gap-12 mb-[2000px] `}>
                        {data.map((item)=> (
                            <img key={item.id} className="cover scale-150" src={item.img} alt='imagem' />
                        ))}
                    </div>
                </div>

                <div className="w-full mb-36"> 
                    <div data-anime="left" id="client-logo" className={`flex gap-12 mb-[2000px] `}>
                        {}
                    </div>
                </div>
            </Parallax>
        </ParallaxProvider>
        
    )
}