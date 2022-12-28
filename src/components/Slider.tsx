import React from "react";
import img1 from '../assets/imagem1.jpg'
import img2 from '../assets/imagem2.jpg'
import { Healthcare, Lifescience } from "./SegTextos";

export function Slider () {
    const slides = [
        {
            title: 'Healthcare',
            slide1 : img1,
            content: Healthcare
        },
        {
            title: 'Lifescience',
            slide1 : img2,
            content: Lifescience
        }
    ]
    return (
        <div className="w-full mr-12">

        </div>
    )
}