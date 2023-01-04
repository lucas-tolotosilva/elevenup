import React from 'react'
import { useMotionValue, useTransform, motion } from "framer-motion"

interface cardProp {
    title: string,
    rosa: string,
    icon: string
}

export function Card (props: cardProp) {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30])
    const rotateY = useTransform(x, [-100, 100], [30, -30])

    return(
        <motion.div 
            style={{ x, y, rotateX, rotateY, z:100}}
            drag
            dragElastic={0.18}
            dragConstraints={{ top:0, left:0, right:0, bottom:0}}
            whileTap={{cursor: 'grabbing'}}
            className='w-56 h-56 border border-white-100 bg-gray-200 flex flex-col items-center justify-center rounded-3xl'>

            <div className='relative pt-4 h-1/2'>
                <motion.img style={{ x, y, rotateX, rotateY, z:100}}  className='absolute -left-7 w-28 h-28' src={props.rosa} alt="Inbound"/> 
                <motion.img style={{ x, y, rotateX, rotateY, z:1000}} draggable="false" className=' w-28 h-28' src={props.icon} alt="Inbound"/>
                
            </div>

            <motion.div 
            style={{ x, y, rotateX, rotateY, z:1000}}
            className='h-1/2 flex items-center'
            > 
                <h2 className='font-default text-[16px] '>{props.title}</h2>
            </motion.div>
        </motion.div>
    )
}