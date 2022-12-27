import React from 'react'
import c1 from '../assets/circles/circulo-1.png'
import c2 from '../assets/circles/circulo-2.png'
import c3 from '../assets/circles/circulo-3.png'
import c4 from '../assets/circles/circulo-4.png'

function Compromisso () {
    return (
        <div className='bg-white-200 my-72 w-9/12 rounded-3xl border-1 border-white-100 flex items-center py-20'>
            <div className="w-6/12 m-0 flex flex-col justify-center gap-8">
                <div className="max-w-[568px] bg-cyan-500">
                    {/* <div className='m-0 w-3/4  bg-cyan-300'> */}
                        <h1 className='font-title w-full text-9xl px-14'>Compromissos</h1>
                        <p className='font-default text-2xl text-justify px-14'>Nosso   time   contém   especialistas   em  design,
                            tráfego em   canais   digitais   e    inteligência   de
                            mercado,    além     de    Biomédicos    e   Biólogos
                            com   mestrado  e  doutorado  e  Engenheiros   de
                            Bioprocessos, formados    nas   mais   renomadas
                            universidades do país.....
                        </p>
                    {/* </div> */}
                </div>
                
            </div>

            <div className="w-6/12 grid grid-cols-2 gap-12 font-default px-14 text-xl">
                <div className='bg-white-100 flex flex-col items-center justify-center py-10 gap-5 rounded-3xl'>
                    <img className='w-20' src={ c1 }/>
                    <div className='h-14 flex items-center '>
                        <span>Profissionalismo</span>
                    </div>
                    
                </div>
                <div className='bg-white-100 flex flex-col items-center justify-center py-10 gap-5 rounded-3xl'>
                    <img className='w-20'  src={ c2 } />
                    
                    <div className='h-14 flex items-center '>
                        <span>Pontualidade</span>
                    </div>
                    
                </div>
                <div className='bg-white-100 flex flex-col items-center justify-center py-10 gap-5 rounded-3xl'>
                    <img className='w-20' src={ c3 } />
                    
                    <div className='h-14 flex items-center '>
                        <span>Relatórios <br /> Gerenciais</span>
                    </div>
                </div>
                <div className='bg-white-100 flex flex-col items-center justify-center py-10 gap-5 rounded-3xl'>
                    <img className='w-20' src={ c4 } />
                    
                    <div className='h-14 flex items-center '>
                        <span>Entrega de  <br /> Resultados</span>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Compromisso;