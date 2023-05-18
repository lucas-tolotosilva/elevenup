import React,{useState} from 'react'
import { motion } from "framer-motion"
import c1 from '../assets/circles/circulo-1.png'
import c2 from '../assets/circles/circulo-2.png'
import c3 from '../assets/circles/circulo-3.png'
import c4 from '../assets/circles/circulo-4.png'
import { useTranslation } from "react-i18next";

export function Compromissos() {
    const {t, i18n} = useTranslation()
    
    return(
        <motion.div 
            className='bg-white-200 dark:bg-black-200 sm:mt-36 mb-16 lg:my-36 lg:max-w-[1280px] rounded-3xl border-1 border-white-100 lg:flex lg:items-center py-12 sm:px-6  sm:w-full sm:mx-5'
            initial={{opacity:0, scale: 0.7}}
            whileInView={{ opacity: 1, scale: 1}}
            transition={{ type: "spring", delay: 0.25 }}
            viewport={{once:true}}>

            {/* --------- Lado Esquerdo --------- */}
            <div className="lg:w-6/12 lg:flex lg:justify-center gap-8">
                <div className="lg:w-[80%] sm:text-center lg:ml-10">
                    <h1 className='dark:text-white-90 font-title w-full sm:text-[50px] sm:text-center lg:text-[109px] -ml-1'>{t('Compromissos')}</h1>
                    <motion.p 
                    className='font-default lg:text-[18px] sm:my-8 sm:text-[14px] text-justify dark:text-gray-400 '
                    initial={{opacity:0, scale: 0.7}}
                    whileInView={{ opacity: 1, scale: 1}}
                    viewport={{once:true}}
                    >
                        {t('CompromissosText')}
                    </motion.p>
                </div>
            </div>
            {/* --------- Fim - Lado Esquerdo --------- */}

            {/* --------- Lado Direito --------- */}
            <div className="lg:w-6/12 sm:w-full flex justify-center font-default lg:text-[16px] sm:text-[13px]">
                <div className="grid grid-cols-2 lg:gap-12 sm:gap-5">
                    <div className='bg-white-100 dark:bg-gray-800 flex flex-col items-center justify-center lg:py-10 lg:gap-5 sm:gap-2 rounded-3xl lg:w-48 lg:h-48 sm:w-32 sm:h-32'>
                        <img className='lg:w-20 sm:w-14' src={ c1 }/>
                        <div className='lg:h-14 sm:h-8 flex items-center dark:text-white-100  '>
                            <span>{t('Profissionalismo')}</span>
                        </div>
                    </div>
                    <div className='bg-white-100 dark:bg-gray-800 flex flex-col items-center justify-center lg:py-10 lg:gap-5 sm:gap-2 rounded-3xl lg:w-48 lg:h-48 sm:w-32 sm:h-32'>
                        <img className='lg:w-20 sm:w-14' src={ c2 }/>
                        <div className='lg:h-14 sm:h-8 flex items-center dark:text-white-100'>
                            <span>{t('Pontualidade')}</span>
                        </div>
                    </div>
                    <div className='bg-white-100 dark:bg-gray-800 flex flex-col items-center justify-center lg:py-10 lg:gap-5 sm:gap-2 rounded-3xl lg:w-48 lg:h-48 sm:w-32 sm:h-32'>
                        <img className='lg:w-20 sm:w-14' src={ c3 }/>
                        <div className='lg:h-14 sm:h-8 flex items-center dark:text-white-100'>
                            <span>{t('RelatoriosGerenciais')}</span>
                        </div>
                    </div>
                    <div className='bg-white-100 dark:bg-gray-800 flex flex-col items-center justify-center lg:py-10 lg:gap-5 sm:gap-2 rounded-3xl lg:w-48 lg:h-48 sm:w-32 sm:h-32'>
                        <img className='lg:w-20 sm:w-14' src={ c4 }/>
                        <div className='lg:h-14 sm:h-8 flex items-center dark:text-white-100'>
                            <span>{t('EntregaDeResultados')}</span>
                        </div>
                    </div>

                </div>
            </div>
            {/* --------- Fim - Lado Direito --------- */}

        </motion.div>
    )
}