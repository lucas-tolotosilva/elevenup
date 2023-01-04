import React from 'react';
import { useMotionValue, useTransform, motion } from "framer-motion"

//importa icones
import consult from '../assets/icons/consultoria.svg'
import criacao from '../assets/icons/criacao.svg'
import dev from '../assets/icons/desenvolvimento.svg'
import geracao from '../assets/icons/geracao.svg'
import gestao from '../assets/icons/gestao.svg'
import inbound from '../assets/icons/inbound.svg'
import rosa1 from '../assets/icons/rosas/rosa1.svg'
import rosa2 from '../assets/icons/rosas/rosa2.svg'
import rosa3 from '../assets/icons/rosas/rosa3.svg'
import rosa4 from '../assets/icons/rosas/rosa4.svg'
import rosa5 from '../assets/icons/rosas/rosa5.svg'
import rosa6 from '../assets/icons/rosas/rosa6.svg'

export function Solucoes(){
    

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30])
    const rotateY = useTransform(x, [-100, 100], [30, -30])

    return (
        <div className="w-full mb-36">
            <h2 className="font-title w-full text-[200px] mb-12">Soluções</h2>
            <div className="flex justify-center w-full">
                <p className="text-center font-default text-[18px] w-6/12 ">
                    A ElevenUp tem como objetivo proporcionar os melhores resultados para a sua empresa
                    de Life Science e Healthcare. Pensando nisso, nós oferecemos as melhores soluções para
                    evoluir  seu  negócio  e   elevar sua   marca   no mundo digital! 
                </p>
            </div>
            <div className="min-w-[1280px] flex items-center justify-center bg-blue-300 ">
                <div style={{perspective: 2000}}> 
                     <div className="flex items-center justify-center ">
                            <motion.div 
                                style={{ x, y, rotateX, rotateY, z:100}}
                                drag
                                dragElastic={0.18}
                                dragConstraints={{ top:0, left:0, right:0, bottom:0}}
                                whileTap={{cursor: 'grabbing'}}
                                className='w-36 h-36 border border-white-100 bg-gray-100 rounded-3xl'>

                                <div className='relative h-3/5'>
                                    <motion.img style={{ x, y, rotateX, rotateY, z:100}}  className='absolute w-20 h-20' src={rosa1} alt="Inbound"/> 
                                    <motion.img style={{ x, y, rotateX, rotateY, z:1000}} draggable="false" className='absolute w-20 h-20' src={inbound} alt="Inbound"/>
                                    
                                </div>

                                <motion.div 
                                style={{ x, y, rotateX, rotateY, z:1000}}
                                className='h-2/5'
                                > 
                                    <h2 className='font-default text-[16px] '>123435</h2>
                                </motion.div>
                            </motion.div>    
                    </div>
                </div>
            </div>
        </div>
    )
}