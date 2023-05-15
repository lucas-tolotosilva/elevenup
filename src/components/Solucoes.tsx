import React from 'react';
import { motion } from "framer-motion"
//importa icones
import consult from '../assets/icons/icons-solucoes/consultoria.svg'
import criacao from '../assets/icons/icons-solucoes/criacao.svg'
import dev from '../assets/icons/icons-solucoes/desenvolvimento.svg'
import geracao from '../assets/icons/icons-solucoes/geracao.svg'
import gestao from '../assets/icons/icons-solucoes/gestao.svg'
import inbound from '../assets/icons/icons-solucoes/inbound.svg'
import rosa1 from '../assets/icons/icons-solucoes/rosas/rosa1.svg'
import rosa2 from '../assets/icons/icons-solucoes/rosas/rosa2.svg'
import rosa3 from '../assets/icons/icons-solucoes/rosas/rosa3.svg'
import rosa4 from '../assets/icons/icons-solucoes/rosas/rosa4.svg'
import rosa5 from '../assets/icons/icons-solucoes/rosas/rosa5.svg'
import rosa6 from '../assets/icons/icons-solucoes/rosas/rosa6.svg'
import { Card, CardMobile } from './Card';

export function Solucoes(){

    return (
        <div className="lg:max-w-[1280px] sm:w-full sm:mx-5 sm:mb-16 lg:mb-36">
            <motion.h2 
                className="dark:text-white-90 font-title w-full lg:text-[150px] sm:text-[50px] mb-4"
                initial={{ opacity: 0 , scale: 0}}
                whileInView={{ opacity: 1 , scale: 1}}
                viewport={{once:true}}>Soluções</motion.h2>
                
            <div className="flex justify-center w-full">
                <p className="dark:text-gray-400 text-center font-default lg:text-[18px] sm:text-[14px] lg:w-6/12 sm:w-full mb-20 mt-10 ">
                    A ElevenUp tem como objetivo proporcionar os melhores resultados para a sua empresa
                    de Life Science e Healthcare. Pensando nisso, nós oferecemos as melhores soluções para
                    evoluir  seu  negócio  e   elevar sua   marca   no mundo digital! 
                </p>
            </div>
            <div className=" sm:w-full flex items-center justify-center">
                <div style={{perspective: 2000}}> 
                    {/* DESKTOP */}
                     <div className="sm:hidden lg:flex relative items-center justify-center ">
                            
                            <Card delay={0.20} shadow="shadow-3xl" title="Inbound Marketing" rosa={rosa1} icon={inbound} />    
                            <Card delay={0.40} shadow="shadow-3xl" title="Desenvolvimento WEB" rosa={rosa4} icon={dev} />    
                            <Card delay={0.60} shadow="shadow-3xl" title="Gestão de Redes Sociais" rosa={rosa3} icon={gestao} />    
                            <Card delay={0.80} shadow="shadow-3xl" title="Consultoria em Inteligência de Mercado" rosa={rosa2} icon={consult} />    
                            <Card delay={1} shadow="shadow-3xl" title="Geração de Leads Qualificados" rosa={rosa5} icon={geracao} />    
                            <Card delay={1.20} shadow="shadow-3xl" title="Criação de Conteúdo" rosa={rosa6} icon={criacao} /> 

                    </div>
                    {/* MOBILE */}
                     <div className="sm:flex-wrap lg:hidden sm:flex sm:items-center sm:justify-center sm:gap-10  ">
                            
                            <CardMobile  shadow="shadow-3xl" title="Inbound Marketing" rosa={rosa1} icon={inbound} />    
                            <CardMobile  shadow="shadow-3xl" title="Desenvolvimento WEB" rosa={rosa4} icon={dev} />    
                            <CardMobile  shadow="shadow-3xl" title="Gestão de Redes Sociais" rosa={rosa3} icon={gestao} />    
                            <CardMobile  shadow="shadow-3xl" title="Consultoria em Inteligência de Mercado" rosa={rosa2} icon={consult} />    
                            <CardMobile shadow="shadow-3xl" title="Geração de Leads Qualificados" rosa={rosa5} icon={geracao} />    
                            <CardMobile  shadow="shadow-3xl" title="Criação de Conteúdo" rosa={rosa6} icon={criacao} /> 

                    </div>
                </div>
            </div>
        </div>
    )
}