import React, { useState } from "react";
import { motion } from "framer-motion"
import lifescience from '../assets/lifescience.jpg'
import healthcare from '../assets/healthcare.jpg'
import { Healthcare, Lifescience } from "./SegTextos";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export function Testes () {
    const posSlide1 = 'absolute z-10 left-0'
    const posSlide2 = 'absolute z-0 right-0 opacity-20'

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
console.log(currentIndex)
    return (
       <div className="w-6/12 flex"> 
            <div className="w-full h-full flex items-center mr-12 mb-36 relative">
                <div className=" w-full relative bg-black-900 pl-14">
                   
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

                </div>
            </div>   
        </div>
    )
}
