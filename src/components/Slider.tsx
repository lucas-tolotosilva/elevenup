import React, { useState } from "react";
import img1 from '../assets/imagem1.jpg'
import img2 from '../assets/imagem2.jpg'
import { Healthcare, Lifescience } from "./SegTextos";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export function Slider () {
    const slides = [
        {
            title: 'Healthcare',
            slide : img1,
            content: Healthcare
        },
        {
            title: 'Lifescience',
            slide : img2,
            content: Lifescience
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(1);

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
        <div className="w-full mr-12 mb-36">
            
            <div className="flex">
                <div style={{backgroundImage: `url(${slides[currentIndex].slide})`}} className="w-[390px] h-[412px] bg-center bg-cover"></div>  
                <div className="flex items-center justify-center relative">
                    <div className="flex items-center justify-center w-auto absolute bottom-0 left-12">
                        {/* Left Arrow */}
                        <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-2xl border-none bg-blue-800 cursor-pointer">
                            <BsChevronCompactLeft onClick={prevSlide} size={25} color='white' />
                        </div>
                        {/* Right Arrow */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl border-none bg-blue-800 cursor-pointer">
                            <BsChevronCompactRight onClick={nextSlide}  size={25} color='white' />
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}