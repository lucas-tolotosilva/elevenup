import React, { useState } from "react";
import { motion } from "framer-motion"
import lifescience from '../assets/lifescience.jpg'
import healthcare from '../assets/healthcare.jpg'
import { Healthcare, Lifescience } from "./SegTextos";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export function Testes () {
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
       <div>
            
       </div>
    )
}

export function Slide(){
    return (
        <div >

        </div>
    )
}