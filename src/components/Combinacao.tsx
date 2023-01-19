import React from 'react'
import { motion } from "framer-motion"
import life from '../assets/life.jpg'
import health from '../assets/health.jpg'

export function Combinacao() {
    return (
        <div className='w-full mb-36'>
            <motion.h2 
                className="font-title w-full text-[200px] mb-4"
                initial={{opacity:0, scale: 0.7}}
                whileInView={{ opacity: 1, scale: 1}}
                viewport={{once:true}}>A Combinação Perfeita</motion.h2>

            <motion.p 
                className='font-default '
                initial={{opacity:0, scale: 0.7}}
                whileInView={{ opacity: 1, scale: 1}}
                viewport={{once:true}}>
                    Ao se unir a ElevenUp você estará junto a profissionais que entendem do seu negócio e utilizam as melhores <br />
                    ferramentaspara desenvolver sua empresa, fazer você se relacionar com seu cliente e vender mais!
            </motion.p>

            <motion.h3 
                className='font-title text-7xl my-20'
                initial={{opacity:0,y:100, scale: 0.7}}
                whileInView={{ opacity: 1,y:0, scale: 1}}
                viewport={{once:true}}> Qual o segmento da sua empresa?
            </motion.h3>

            <div className='w-full  flex justify-center'>
                <div className='max-w-[1280px] min-w-[1270px] flex justify-center items-center'>
                    <motion.div 
                        className='w-6/12 z-20 mr-14 p-12 text-left rounded-3xl bg-white-150'
                        initial={{opacity:0, scale: 0}}
                        whileInView={{ opacity: 1, scale: 1}}
                        viewport={{once:true}}
                        transition={{type:"spring", delay: 0.3, bounce: 0.5}}>
                            <div>
                                <h4 className='font-title text-left mb-6 text-4xl'>Life Science</h4>
                                <p className='font-default w-11/12'>  
                                    – Representantes de materiais laboratoriais e
                                    médico-hospitalares. <br />
                                    – Prestadores de serviços de suporte e manutenção. <br />
                                    – Softwares relacionados à Biotech. <br />
                                    – Indústria de materiais laboratoriais
                                    médico-hospitalares. <br />
                                </p>
                            </div>
                    </motion.div>

                    <motion.div 
                        className='w-6/12 z-20 ml-14 p-12 text-left rounded-3xl bg-white-150'
                        initial={{opacity:0, scale: 0}}
                        whileInView={{ opacity: 1, scale: 1}}
                        transition={{type:"spring", delay: 0.3, bounce: 0.5}}
                        viewport={{once:true}}>
                            <div>
                                <h4 className='font-title text-left mb-6 text-4xl'>Healthcare</h4>
                                <p className='font-default w-11/12'>  
                                    – Laboratórios de análise. <br />
                                    – Serviços especializados em saúde.<br />
                                    – Empresas de equipamentos especializados.<br />
                                    – Empresas de plano de saúde (clínicas populares).<br />
                                    – Clínicas de saúde.<br /><br />
                                </p>
                            </div>
                    </motion.div>

                </div>
            </div>

            <div className='w-full z-10 flex justify-center'>
                <div className='max-w-[1280px] min-w-[1270px] flex items-center justify-center'>
                    <motion.div 
                        className='w-6/12 -mt-40 ml-16 mr-32'
                        initial={{opacity:0,y: 100, scale: 0}}
                        whileInView={{ opacity: 1,y:0, scale: 1}}
                        transition={{delay: 0.5}}
                        viewport={{once:true}}>
                            <img className='w-full rounded-3xl' src={life} />
                    </motion.div>
                    <motion.div 
                        className='w-6/12 -mt-40 ml-32 mr-16'
                        initial={{opacity:0,y: 100, scale: 0}}
                        whileInView={{ opacity: 1,y:0, scale: 1}}
                        transition={{delay: 0.5}}
                        viewport={{once:true}}>
                            <img className='w-full rounded-3xl' src={health} />
                    </motion.div>
                </div>
            </div >
            
        </div>
    )
}