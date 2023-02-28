import React from 'react'
import { motion } from "framer-motion"
import c1 from '../assets/circles/circulo-1.png'
import c2 from '../assets/circles/circulo-2.png'
import c3 from '../assets/circles/circulo-3.png'
import c4 from '../assets/circles/circulo-4.png'

export function Compromissos() {
    return(
        <motion.div 
            className='bg-white-200 sm:mt-36 mb-16 lg:my-36 lg:max-w-[1280px] rounded-3xl border-1 border-white-100 lg:flex lg:items-center py-12 sm:px-6  sm:w-full sm:mx-5'
            initial={{opacity:0, scale: 0.7}}
            whileInView={{ opacity: 1, scale: 1}}
            transition={{ type: "spring", delay: 0.25 }}
            viewport={{once:true}}>

            {/* --------- Lado Esquerdo --------- */}
            <div className="lg:w-6/12 lg:flex lg:justify-center gap-8">
                <div className="lg:w-[80%] sm:text-center lg:ml-10">
                    <h1 className='font-title w-full sm:text-[50px] sm:text-center lg:text-[109px] -ml-1'>Compromissos</h1>
                    <motion.p 
                    className='font-default lg:text-[18px] sm:my-8 sm:text-[14px] text-justify'
                    initial={{opacity:0, scale: 0.7}}
                    whileInView={{ opacity: 1, scale: 1}}
                    viewport={{once:true}}
                    >
                        Nosso   time   contém   especialistas   em  design,
                        tráfego em   canais   digitais   e    inteligência   de
                        mercado,    além     de    Biomédicos    e   Biólogos
                        com   mestrado  e  doutorado  e  Engenheiros   de
                        Bioprocessos, formados    nas   mais   renomadas
                        universidades do país.
                    </motion.p>
                </div>
            </div>
            {/* --------- Fim - Lado Esquerdo --------- */}

            {/* --------- Lado Direito --------- */}
            <div className="lg:w-6/12 sm:w-full flex justify-center font-default lg:text-[16px] sm:text-[13px]">
                <div className="grid grid-cols-2 lg:gap-12 sm:gap-5">
                    <div className='bg-white-100 flex flex-col items-center justify-center lg:py-10 lg:gap-5 sm:gap-2 rounded-3xl lg:w-48 lg:h-48 sm:w-32 sm:h-32'>
                        <img className='lg:w-20 sm:w-14' src={ c1 }/>
                        <div className='lg:h-14 sm:h-8 flex items-center '>
                            <span>Profissionalismo</span>
                        </div>
                    </div>
                    <div className='bg-white-100 flex flex-col items-center justify-center lg:py-10 lg:gap-5 sm:gap-2 rounded-3xl lg:w-48 lg:h-48 sm:w-32 sm:h-32'>
                        <img className='lg:w-20 sm:w-14' src={ c2 }/>
                        <div className='lg:h-14 sm:h-8 flex items-center '>
                            <span>Pontualidade</span>
                        </div>
                    </div>
                    <div className='bg-white-100 flex flex-col items-center justify-center lg:py-10 lg:gap-5 sm:gap-2 rounded-3xl lg:w-48 lg:h-48 sm:w-32 sm:h-32'>
                        <img className='lg:w-20 sm:w-14' src={ c3 }/>
                        <div className='lg:h-14 sm:h-8 flex items-center '>
                            <span>Relatórios <br /> Gerenciais</span>
                        </div>
                    </div>
                    <div className='bg-white-100 flex flex-col items-center justify-center lg:py-10 lg:gap-5 sm:gap-2 rounded-3xl lg:w-48 lg:h-48 sm:w-32 sm:h-32'>
                        <img className='lg:w-20 sm:w-14' src={ c4 }/>
                        <div className='lg:h-14 sm:h-8 flex items-center '>
                            <span>Entrega de  <br /> Resultados</span>
                        </div>
                    </div>

                </div>
            </div>
            {/* --------- Fim - Lado Direito --------- */}

        </motion.div>
    )
}