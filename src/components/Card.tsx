import React from 'react'
import { useMotionValue, useTransform, motion } from "framer-motion"

interface cardProp {
    title: string,
    rosa: string,
    icon: string,
    shadow: string
}

export function Card (props: cardProp) {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30])
    const rotateY = useTransform(x, [-100, 100], [30, -30])

    return(
        <div className='relative'>
            <div className='mr-5 ml-5 flex items-end absolute top-12 justify-center w-48 h-48'>
                <div className='w-44 h-44 bg-gradient-radial-blue-mini'>  </div>
            </div>
            <motion.div 
                style={{ x, y, rotateX, rotateY, z:100}}
                drag
                dragElastic={0.05}
                dragConstraints={{ top:0, left:0, right:0, bottom:0}}
                whileTap={{cursor: 'grabbing'}}
                className={`w-48 h-48 border mr-5 ml-5 ${props.shadow} border-white-100 bg-gray-200 flex flex-col items-center justify-center rounded-3xl`}>

                <div className='relative pt-4 h-1/2'>
                    <motion.img style={{ x, y, rotateX, rotateY, z:10}} className='absolute -left-7 w-20 h-20' src={props.rosa} alt="Inbound"/> 
                    <motion.img style={{ x, y, rotateX, rotateY, z:10}} draggable="false" className=' w-20 h-20' src={props.icon} alt="Inbound"/> 
                </div>

                <motion.div  
                style={{ x, y, rotateX, rotateY, z:10}}
                className='h-1/2 flex items-center'
                > 
                    <h2 className='font-default text-[13px] w-36'>{props.title}</h2>
                </motion.div>
            </motion.div>

        </div>
    )
}