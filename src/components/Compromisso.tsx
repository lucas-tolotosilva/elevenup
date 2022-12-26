import React from 'react'
import c1 from '../assets/circles/circulo-1.png'
import c2 from '../assets/circles/circulo-2.png'
import c3 from '../assets/circles/circulo-3.png'
import c4 from '../assets/circles/circulo-4.png'

function Compromisso () {
    return (
        <div className='bg-white-200 border-2 w-9/12 rounded-3xl border-indigo-600 flex py-20'>
            <div className="w-6/12">
                <h1 className='font-title text-9xl'>Compromissos</h1>
                <p className='font-default text-justify px-14'>Nosso   time   contém   especialistas   em  design,
                    tráfego em   canais   digitais   e    inteligência   de
                    mercado,    além     de    Biomédicos    e   Biólogos
                    com   mestrado  e  doutorado  e  Engenheiros   de
                    Bioprocessos, formados    nas   mais   renomadas
                    universidades do país.
                </p>
            </div>

            <div className="w-6/12 grid grid-cols-2 gap-12 px-14">
                <div className='bg-blue-900'>
                    <img src={ c1 }/>
                    <span></span>
                </div>
                <div className='bg-blue-900'>
                    <img src={ c2 } />
                    <span></span>
                </div>
                <div className='bg-blue-900'>
                    <img src={ c3 } />
                    <span></span>
                </div>
                <div className='bg-blue-900'>
                    <img src={ c3 } />
                    <span></span>
                </div>
            </div>
            

        </div>
    )
}

export default Compromisso;