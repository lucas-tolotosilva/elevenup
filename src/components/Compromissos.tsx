import React from 'react'
import c1 from '../assets/circles/circulo-1.png'
import c2 from '../assets/circles/circulo-2.png'
import c3 from '../assets/circles/circulo-3.png'
import c4 from '../assets/circles/circulo-4.png'

export function Compromissos() {
    return(
        <div className='bg-white-200 my-36 max-w-[1280px] rounded-3xl border-1 border-white-100 flex items-center py-12'>

            {/* --------- Lado Esquerdo --------- */}
            <div className="w-6/12 flex justify-center gap-8">
                <div className="w-[80%] ml-10">
                    <h1 className='font-title w-full text-[109px] -ml-1'>Compromissos</h1>
                    <p className='font-default text-[18px] text-justify'>
                        Nosso   time   contém   especialistas   em  design,
                        tráfego em   canais   digitais   e    inteligência   de
                        mercado,    além     de    Biomédicos    e   Biólogos
                        com   mestrado  e  doutorado  e  Engenheiros   de
                        Bioprocessos, formados    nas   mais   renomadas
                        universidades do país.
                    </p>
                </div>
            </div>
            {/* --------- Fim - Lado Esquerdo --------- */}

            {/* --------- Lado Direito --------- */}
            <div className="w-6/12 flex justify-center font-default text-1xl text-[16px]">
                <div className="grid grid-cols-2 gap-12">
                    <div className='bg-white-100 flex flex-col items-center justify-center py-10 gap-5 rounded-3xl w-48 h-48'>
                        <img className='w-20' src={ c1 }/>
                        <div className='h-14 flex items-center '>
                            <span>Profissionalismo</span>
                        </div>
                    </div>

                    <div className='bg-white-100 flex flex-col items-center justify-center py-10 gap-5 rounded-3xl w-48 h-48'>
                        <img className='w-20'  src={ c2 } />
                        <div className='h-14 flex items-center '>
                            <span>Pontualidade</span>
                        </div>
                    </div>

                    <div className='bg-white-100 flex flex-col items-center justify-center py-10 gap-5 rounded-3xl w-48 h-48'>
                        <img className='w-20' src={ c3 } />
                        <div className='h-14 flex items-center '>
                            <span>Relatórios <br /> Gerenciais</span>
                        </div>
                    </div>

                    <div className='bg-white-100 flex flex-col items-center justify-center py-10 gap-5 rounded-3xl w-48 h-48'>
                        <img className='w-20' src={ c4 } />
                        <div className='h-14 flex items-center '>
                            <span>Entrega de  <br /> Resultados</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------- Fim - Lado Direito --------- */}

        </div>
    )
}