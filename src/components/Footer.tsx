import React from 'react'
import bg from '../assets/fundo-footer.png'
import bgBlur from '../assets/bg-blur.png'

export function Footer () {
    return (
        <div className='w-full  relative'>
            <div className='w-32 h-32 absolute z-10 bg-blue-500'>

            </div>
            <div className='relative'>
                <div className='absolute w-full h-full'>
                    <img className='cover w-full h-full' src={bgBlur}/>
                </div>
                <div className='absolute w-full h-full'>
                    <img className=' cover w-full h-full' src={bg}/>
                </div>
            </div>
        </div>
    )
}