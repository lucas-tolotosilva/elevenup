import React, { useState } from "react";
import { motion } from "framer-motion"
import lifescience from '../assets/lifescience.jpg'
import healthcare from '../assets/healthcare.jpg'
import { Healthcare, Lifescience } from "./SegTextos";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export function Slider () {
    //https://www.youtube.com/results?search_query=react+3d+carousel

    const posSlide1 = 'absolute z-10 left-0 hover:cursor-pointer w-[390px] h-[412px] bg-center bg-cover mt-10 ml-10'
    const posSlide2 = 'absolute z-0 right-0 opacity-20'

    const variants = {
        current : { x: 0, opacity: 1, scale: 1.25},
        prev: {x: 200, opacity: 0.20, scale: 0.75}
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

    // const handleToggled = () => {
    //     setIsToggled(!isToggled)
    // }


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
console.log(!isToggled)
    return (
        <div className="w-[1440px] flex mb-36">

            <div className="w-6/12">
                <div className="w-full h-full flex items-center mr-12 mb-36 relative">
                    <div className=" w-full pl-14">
                       
                        {/* --------- Slide --------- */}
                        <div className="flex">
                            {/* <motion.div  style={{backgroundImage: `url(${slides[currentIndex].slide})`}} className="z-10 hover:cursor-pointer w-[390px] h-[412px] bg-center bg-cover mt-10 ml-10"
                                initial={{ opacity:0 ,x: -300, scale: 0.5}}
                                whileInView={{ opacity: 1 , x: 0, scale: 1}}
                                transition={{ type: "spring", delay: 0.10 }}
                                whileHover={{scale:1.15}}
                                whileFocus={{x:100}}></motion.div>   */}
                            <div className="flex">
                                    {slides.map((slide, index) => {
                                        return <motion.img key={index} src={slide.slide} className={`${currentIndex === index ? posSlide1 : posSlide2}`}
                                                animate={currentIndex === index ? "current" : "prev"}
                                                variants={variants}
                                            
                                                /> 
                                    })}
                            </div>
                            
                            <div className="flex items-center justify-center relative">
                                <motion.div className="flex items-center justify-center w-auto absolute bottom-0 left-12"
                                    initial={{ opacity:0 , scale: 0}}
                                    whileInView={{ opacity: 1 , scale: 1}}
                                    transition={{ type: 'spring',delay: 0.8, bounce: 0.55 }}>
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
                transition={{ type: "spring", delay: 0.40 }}>

                {!isToggled ? <Healthcare color='bg-gradient-radial2' /> : <Lifescience color='bg-gradient-radial-blue2'/>}            
            
            </motion.div>
        </div>
    )
}