import React, { useState } from "react";
import lifescience from '../assets/lifescience.jpg'
import healthcare from '../assets/healthcare.jpg'
import { Healthcare, Lifescience } from "./SegTextos";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export function Slider () {
    const slides = [
        {
            title: 'Healthcare',
            slide : healthcare,
            content: Healthcare
        },
        {
            title: 'Lifescience',
            slide : lifescience,
            content: Lifescience
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return (
        <div className="w-full h-full flex items-center mr-12 mb-36 relative">
            <div className=" w-full pl-14">
            <div >
                <div className="w-[600px] h-[600px]  top-0 left-28 absolute rounded-full bg-gradient-radial "> 
                
                </div> 

                <div className="w-[300px] h-[412px] absolute bg-gradient-to-r  from-blue-600 to-blue-900 blur-sm">
                    
                </div>

                <div className="w-[412px] h-[300px] mt-20 ml-44 absolute bg-gradient-to-r  from-blue-600 to-blue-900 ">
                    
                </div>
            </div>
            

            {/* --------- Slide --------- */}
            <div className="flex">
                <div  style={{backgroundImage: `url(${slides[currentIndex].slide})`,transition: `ease-in-out 500ms`}} className="z-10 transition duration-300 ease-out hover:scale-105 w-[390px] h-[412px] bg-center bg-cover mt-10 ml-10"></div>  
                <div className="flex items-center justify-center relative">
                    <div className="flex items-center justify-center w-auto absolute bottom-0 left-12">
                        {/* Seta Esquerda */}
                        <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-2xl border-none bg-blue-800 cursor-pointer hover:bg-blue-600">
                            <BsChevronCompactLeft onClick={prevSlide} size={25} color='white' />
                        </div>
                        {/* seta Direita */}
                        <div className=" flex items-center justify-center w-12 h-12 rounded-2xl border-none bg-blue-800 cursor-pointer hover:bg-blue-600">
                            <BsChevronCompactRight onClick={nextSlide}  size={25} color='white' />
                        </div>
                    </div>
                </div>
            </div>
            {/* --------- Fim Slide --------- */}
            </div>
           

        </div>
    )
}