import React from 'react'
import { motion } from "framer-motion"
import '../styles/main.css'
import { BiInfinite } from 'react-icons/bi'

export function Footer () {
    return (
        <div className="w-full min-h-[700px] bg-[url('../assets/fundo.png')] cover blur-sm relative">
            <div className='animate-slow-anim4 w-full h-full flex justify-center relative'>
                {/* ---- RETÂNGULO CENTRO - AZUL ---- */}
                {/* <motion.div 
                    style={{transform: 'rotate(12deg)'}}
                    animate={{
                        //x: [1, 2, 2, 1, 1],
                        //y: [0, 0, 180, 180, 0],
                        x: [0, 100, 200, 300, 200, 100, 0, 100],
                        y: [0, 100, -50, 50, -50, 50, -50, 0]
                      }}
                      transition={{
                        type: "spring", 
                        duration: 10,
                        repeat: Infinity
                      }}
                
                className='absolute -top-12 blur-sm w-96 h-56 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900'></motion.div> */}
                <div className='absolute -top-12 -rotate-[24deg] blur-sm w-96 h-56 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900'></div>
            </div>
            
            {/* ---- RETÂNGULO ESQUERDA - ROSA ---- */}
            <div className='animate-slow-anim1'>
                <div className='absolute animate-slow-anim -top-12 -left-20 blur-sm w-48 h-48 -rotate-[60deg] rounded-3xl bg-gradient-to-t from-pink-500 to-pink-800'></div>
            </div>

            {/* ---- RETÂNGULO ESQUERDA 2 - ROSA ---- */}
            <div className='animate-slow-anim2'>
                <div className='absolute left-96 top-24 blur-lg w-24 h-24 -rotate-[60deg] rounded-3xl bg-gradient-to-t from-pink-500 to-pink-800'></div>
            </div>

             {/* ---- *** FUNDO COM OPACIDADE *** ---- */}
            <div className="w-full h-full bg-[url('../assets/fundo-opacidade.png')] blur-sm absolute "></div>
            
            {/* ---- RETÂNGULO ESQUERDA - AZUL ---- */}
            <div className='animate-slow-anim5'>
                <div className='absolute top-16 -left-28 blur-sm w-80 h-64 -rotate-[60deg] rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900'></div>
            </div>

            {/* ---- RETÂNGULO ESQUERDA 2 - ROSA ---- */}
            <div className='animate-slow-anim6'>
                <div className='absolute right-96 -top-10 blur-md w-32 h-24 rotate-[25deg] rounded-3xl bg-gradient-to-b from-pink-500 to-pink-800'></div>
            </div>

            {/* ---- RETÂNGULO DIREITO - AZUL ---- */}
            <div className='animate-slow-anim3'>
                <div className='absolute -right-24 blur-sm w-64 h-60 -rotate-[60deg] rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900'></div>
            </div>

        </div>
    )
}