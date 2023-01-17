import React, { useState } from "react";
import { motion } from "framer-motion"
import lifescience from '../assets/lifescience.jpg'
import healthcare from '../assets/healthcare.jpg'
import { Healthcare, Lifescience } from "./SegTextos";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export function Slider () {
    //https://www.youtube.com/results?search_query=react+3d+carousel
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

    return (
        <div className="w-[1440px] flex mb-36">

            <div className="w-6/12">
                <div className="w-full h-full flex items-center mr-12 mb-36 relative">
                    <div className=" w-full pl-14">
                        <div >

                            {/* --------- sombra --------- */}
                            <motion.div className={`w-[700px] h-[700px]  top-0 left-28 absolute rounded-full ${!isToggled ? 'bg-gradient-radial' :'bg-gradient-radial-blue'} `}
                            initial={{ opacity:0 , scale: 0}}
                            whileInView={{ opacity: 1 , scale: 1}}
                            transition={{ delay: 0.8 }}> 
                            
                            </motion.div> 

                            {/* --------- Quadrado 1 --------- */}
                            <motion.div className={`card w-[300px] h-[412px] absolute bg-gradient-to-r blur-sm ${!isToggled ? 'bg-gradient-to-r from-blue-600 to-blue-900' :'from-pink-500 to-pink-800' }`}
                                initial={{ opacity:0 ,x: -400, scale: 0.5}}
                                whileInView={{ opacity: 1 , x: 0, scale: 1}}
                                transition={{ type: "spring", delay: 0.80 }}
                                >
                                
                            </motion.div>

                            {/* --------- Quadrado 2 --------- */}
                            <motion.div className={`card w-[412px] h-[300px] mt-20 ml-44 absolute bg-gradient-to-r ${!isToggled ? 'bg-gradient-to-r from-blue-600 to-blue-900 ' :'from-pink-500 to-pink-800' }`}
                                initial={{ opacity:0 ,x: -200, scale: 0.5}}
                                whileInView={{ opacity: 1 , x: 0, scale: 1}}
                                transition={{ type: "spring", delay: 0.60 }}>
                                
                            </motion.div>
                        </div>
                        

                        

                        {/* --------- Slide --------- */}
                        <div className="flex">
                            <motion.div  style={{backgroundImage: `url(${slides[currentIndex].slide})`}} className="z-10 hover:cursor-pointer w-[390px] h-[412px] bg-center bg-cover mt-10 ml-10"
                                initial={{ opacity:0 ,x: -300, scale: 0.5}}
                                whileInView={{ opacity: 1 , x: 0, scale: 1}}
                                transition={{ type: "spring", delay: 0.10 }}
                                whileHover={{scale:1.15}}
                                whileFocus={{x:100}}></motion.div>  
                                
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