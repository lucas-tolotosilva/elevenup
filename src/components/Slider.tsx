import React, { useState } from "react";
import { motion } from "framer-motion"
import lifescience from '../assets/lifescience.jpg'
import healthcare from '../assets/healthcare.jpg'
import { Healthcare, Lifescience } from "./SegTextos";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export function Slider () {


    const variants = {
        current : { x: 0, opacity: 1, scale: 1.15},
        prev: {x: 50, opacity: 0.20, scale: 0.75}
    }

    const slides = [
        {
            title: 'Healthcare',
            slide : healthcare,
            content: Healthcare,
            color: 'from-blue-600 to-blue-900'
        },
        {
            title: 'Lifescience',
            slide : lifescience,
            content: Lifescience,
            color: 'from-pink-500 to-pink-800'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isToggled, setIsToggled] = useState(false);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        
        setIsToggled(!isToggled);

        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;

        setIsToggled(!isToggled);
        
        setCurrentIndex(newIndex)
    }

    const posSlide1 = `absolute z-10 left-0 w-[380px] h-[412px] bg-center bg-cover  mt-10 ml-10`
    const posSlide2 = `absolute z-0 right-0  opacity-20`
    return (
        <div className="w-[1440px] flex mb-36">

            <div className="w-6/12">
                <div className="w-full h-full flex items-center mr-12 mb-36 relative">
                    <div className="h-5/6 w-full pl-14">
                       {/* --------- Slide --------- */}
                       <div className="flex">
                            <div className="flex ">
                                    {slides.map((slide, index) => {
                                        return <motion.img key={index} src={slide.slide} className={`${currentIndex === index ? posSlide1 : posSlide2}`}
                                                animate={currentIndex === index ? "current" : "prev"}
                                                variants={variants}
                                                /> 
                                    })}
                            </div>
                            
                            <div className="flex bg-black-900 ">
                                <motion.div 
                                    className="flex items-center justify-center w-auto absolute bottom-1/2 right-16"
                                    initial={{ opacity:0 , scale: 0}}
                                    whileInView={{ opacity: 1 , scale: 1}}
                                    transition={{ type: 'spring',delay: 0.8, bounce: 0.55 }}
                                    viewport={{once:true}}>

                                    {/* Seta Esquerda */}
                                    <div className={`flex items-center justify-center w-12 h-12 mr-4 rounded-2xl border-none cursor-pointer  ${!isToggled ? ' bg-blue-800 hover:bg-blue-600' : ' bg-pink-800 hover:bg-pink-600' }`}>
                                        <BsChevronCompactLeft onClick={prevSlide} size={25} color='white' />
                                    </div>

                                    {/* seta Direita */}
                                    <div className={`flex items-center justify-center w-12 h-12 mr-4 rounded-2xl border-none cursor-pointer ${!isToggled ? ' bg-blue-800 hover:bg-blue-600' : ' bg-pink-800 hover:bg-pink-600' }`}>
                                        <BsChevronCompactRight onClick={nextSlide}  size={25} color='white' />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        {/* --------- Fim Slide --------- */}
                        
                    </div>
                </div>
            </div>

            <motion.div className="w-6/12"
                initial={{ opacity:0 ,x: 400, scale: 0.5}}
                whileInView={{ opacity: 1 , x: 0, scale: 1}}
                transition={{ type: "spring", delay: 0.40 }}
                viewport={{once:true}}  >

                {!isToggled ? <Healthcare color='bg-white' /*color='bg-gradient-radial2'*//> : <Lifescience color='bg-white '/*color='bg-gradient-radial-blue2'*//>}            
            
            </motion.div>
        </div>
    )
}