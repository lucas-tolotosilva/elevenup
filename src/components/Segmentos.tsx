import React from "react";
import { Slider, SlideSm } from "./Slider";
import { motion } from "framer-motion"

export function Segmentos (){
    return(
        <div className="">
            <motion.h2 
            className="font-title w-full sm:text-[50px] lg:text-[150px]"
            initial={{ opacity: 0 , scale: 0}}
            whileInView={{ opacity: 1 , scale: 1}}
            viewport={{once:true}}
            >Segmentos</motion.h2>
                <div className="sm:hidden w-[1440px] lg:flex"> 
                   <Slider /> 
                </div>
                <div className="sm:flex sm:mb-9 w-full lg:hidden"> 
                   <SlideSm />
                </div>
        </div>
    )
}

