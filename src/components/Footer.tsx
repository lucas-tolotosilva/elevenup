import React from 'react'
import bg from '../assets/fundo-footer.png'
import bgBlur from '../assets/bg-blur.png'

export function Footer () {
    return (
        <div className='w-full  relative'>
            <div className='w-32 h-32 absolute z-10 bg-blue-500'>

            </div>
            <div className='relative'>
                <div className=' w-full h-full'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fill-opacity="0.4" d="M0,128L48,122.7C96,117,192,107,288,90.7C384,75,480,53,576,58.7C672,64,768,96,864,117.3C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                    <img className='cover w-full h-full' src={bgBlur}/>
                </div>
                <div className='absolute w-full h-full'>
                    <img className=' cover w-full h-full' src={bg}/>
                </div>
            </div>
        </div>
    )
}