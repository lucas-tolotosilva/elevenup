import React from 'react'
import life from '../assets/life.jpg'
import health from '../assets/health.jpg'

export function Combinacao() {
    return (
        <div className='w-full mb-36'>
            <h2 className="font-title w-full text-[200px] mb-4">A Combinação Perfeita</h2>
            <p className='font-default '>
                Ao se unir a ElevenUp você estará junto a profissionais que entendem do seu negócio e utilizam as melhores <br />
                ferramentaspara desenvolver sua empresa, fazer você se relacionar com seu cliente e vender mais!
            </p>

            <h3 className='font-title text-7xl my-20'>Qual o segmento da sua empresa?</h3>

            <div className='w-full  flex justify-center'>
                <div className='max-w-[1280px] min-w-[1270px] flex justify-center items-center'>
                    <div className='w-6/12 z-20 mr-14 p-12 text-left rounded-3xl bg-white-150'>
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
                    </div>

                    <div className='w-6/12 z-20 ml-14 p-12 text-left rounded-3xl bg-white-150'>
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
                    </div>
                </div>
            </div>

            <div className='w-full z-10 flex justify-center'>
                <div className='max-w-[1280px] min-w-[1270px] flex items-center justify-center'>
                    <div className='w-6/12 -mt-40 ml-16 mr-32 bg-black-900'>
                        <img className='w-full' src={life} />
                    </div>
                    <div className='w-6/12 -mt-40 ml-32 mr-16 bg-black-900'>
                        <img className='w-full' src={health} />
                    </div>
                </div>
            </div >
            
        </div>
    )
}