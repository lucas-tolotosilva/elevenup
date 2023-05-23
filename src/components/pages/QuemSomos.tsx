import React, { useState } from "react"
import { Footer, FooterMobile } from "../Footer"
import { Nav } from "../Nav"
import img1 from "../../assets/quem-somos.jpg"
import copy from '../../assets/quem-somos-imagens/copy.svg'
import designer from '../../assets/quem-somos-imagens/designer.svg'
import manager from '../../assets/quem-somos-imagens/manager.svg'
import webDev from '../../assets/quem-somos-imagens/webDev.svg'
import { useTranslation } from 'react-i18next'

export function QuemSomos() {
    const { t, i18n} = useTranslation()
    const listaQuemSomos = [
    {
        img: copy,
        nome: 'Copywriters',   
    },
    {
        img: designer,
        nome: 'Designers',   
    },
    {
        img: manager,
        nome: t('TrafegoEmCanais'),   
    },
    {
        img: webDev,
        nome: t('DesenvolvedoresWeb'),   
    },
]
    return (
        
        <div className="bg-gray-200 dark:bg-black-900 overflow-x-hidden">
            <div id="inicio" className="absolute w-full h-10 top-0 bg-transparent"></div>

            <div className="relative  w-screen min-h-screen flex flex-col items-center justify-center text-center sm:mb-32 ">
                <Nav />

                <div className=" max-w-[1280px] mt-32">
                    <h1 className="font-title dark:text-white-90 tracking-wider font-bold mb-20 lg:text-[150px] sm:text-[65px]">{t('QuemSomos')}</h1>
                    <div className="flex justify-end  items-center">
                        <img className="lg:inline-flex sm:hidden w-1/2 cover rounded-3xl" src={img1} />
                        <div className="sm:w-full sm:mx-5 text-justify px-10 py-5 rounded-3xl backdrop-blur-md font-default text-[15px] bg-white-80 ">
                            <p>
                                {t('ElevenUp')}
                                <br /><br />
                                {t('PercebemosQue')}
                            </p>
                        </div>
                    </div>
                    <div className="font-semibold font-default dark:text-white-90 sm:text-2xl sm:mx-5 lg:text-4xl mt-28">
                        <p>
                        {t('NossoTimeTem')}
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className="w-full  flex flex-wrap items-center justify-center overflow-hidden gap-10">
                        {listaQuemSomos.map(item => (
                            <CardQuemSomos key={item.nome} img={item.img} nome={item.nome} />
                        ))}
            </div>
            <div className="font-default dark:text-white-90 pt-24 pb-16 flex items-center justify-center text-center sm:text-[15px] sm:mx-5 lg:text-xl">
                        <p>
                        {t('AlemDe')}
                        </p>
                    </div>
            <div className="w-screen bg-black-900 h-48 text-white-100 font-default text-center sm:text-2xl lg:text-4xl flex justify-center items-center mt-14 mb-14">
                <span>
                    {t('VenhaPara')}
                </span>
            </div>
            <div className="w-screen flex items-center justify-center sm:mb-28 pt-10">
                <div className="font-default dark:text-white-90 sm:text-[14px] sm:mx-5 lg:mb-80 sm:mb-5 lg:text-2xl max-w-[1200px] text-center">
                    <p>
                    {t('Assim')}
                    </p>
                </div>
            </div>
            
            {/* DESKTOP */}
            <div className='lg:flex sm:hidden items-center justify-center'>
                <Footer />
            </div>
            {/* MOBILE */}
            <div className='sm:flex sm:items-center text-center lg:hidden'>
                <FooterMobile />
            </div>
        </div>
    )
}
type quemSomosProps={
    img: string,
    nome: string
}
export function CardQuemSomos({ img, nome}:quemSomosProps ){
    return(
        <div className='w-[280px] h-[280px] dark:bg-gray-400 dark:rounded-lg'>
            <div className="w-full h-[280px]  flex flex-col items-center rounded-3xl justify-center cover ">
                <img className='object-contain  w-[194px] h-[194px]  ' src={ img} />
                <div className="flex flex-col items-center justify-center">
                    <span className="font-default text-center mt-2 text-lg">{nome}</span>
                </div>
            </div>
        </div>
        )
    }