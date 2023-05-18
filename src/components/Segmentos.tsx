import React from "react";
import { Slider, SlideSm } from "./Slider";
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

export function Segmentos (){
    const {t, i18n} = useTranslation()
    return(
        <div className="">
            <motion.h2 
            className="dark:text-white-90 font-title w-full sm:text-[50px] text-center lg:text-[150px]"
            initial={{ opacity: 0 , scale: 0}}
            whileInView={{ opacity: 1 , scale: 1}}
            viewport={{once:true}}
            >{t('Segmentos')}</motion.h2>
                <div className="sm:hidden w-[1440px] lg:flex"> 
                   <Slider /> 
                </div>
                <div className=" sm:flex sm:mb-9 w-full lg:hidden"> 
                   <SlideSm />
                </div>
        </div>
    )
}

