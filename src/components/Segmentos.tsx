import React from "react";
import { Slider } from "./Slider";
import { motion } from "framer-motion"

export function Segmentos (){
    return(
        <div className="">
            <motion.h2 
            className="font-title w-full text-[200px]"
            initial={{ opacity: 0 , scale: 0}}
            whileInView={{ opacity: 1 , scale: 1}}
            viewport={{once:true}}
            >Segmentos</motion.h2>
                <div className="w-[1440px] flex"> 
                   <Slider />
                </div>
        </div>
    )
}

