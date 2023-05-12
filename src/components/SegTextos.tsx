import React, {useState, useEffect} from "react";

export function Healthcare (){
    return (
           <div className="w-full sm:pb-10 h-full flex flex-col justify-center relative ">
              
              <div className={`text-justify z-20 rounded-3xl font-default text-[18px] sm:px-8 lg:px-14 lg:py-14 lg:dark:bg-black-gradient lg:bg-white-gradient`}>
                    <div className="mb-7">
                        <h3 className="dark:text-white-90 font-title sm:text-[30px] sm:text-center sm:mt-10 lg:text-6xl">Healthcare</h3>
                    </div>
                    <div className="mb-7">
                        <p className="dark:text-gray-400 sm:text-[14px] lg:text-[18px]">
                            Através de nosso conhecimento biológico, criamos uma
                            estratégia personalizada  para  o  seu negócio utilizando
                            marketing    e    Healthcare.    Vamos   proporcionar   sua
                            evolução potencializando seus resultados,  aumentando
                            sua  presença   digital  e   solucionando   todos   os  seus
                            problemas de marketing.
                        </p>   
                    </div>

                    <div className="mb-7">
                        <h6 className="dark:text-white-90 font-bold sm:text-center sm:text-[17px]">Utilizamos Ciência e Inovação!</h6>
                    </div>
                    
                    <div>
                        <h6 className="dark:text-white-90 sm:text-[17px] font-bold">Nossos segmentos:</h6>
                        <ul className="dark:text-gray-400 sm:text-[14px] list-disc ml-10 sm:mt-4">
                            <li>Laboratórios de análise.</li>
                            <li>Serviços especializados em saúde.</li>
                            <li>Empresas de equipamentos especializados.</li>
                            <li>Empresas de plano de saúde (clínicas populares).</li>
                            <li>Clínicas de saúde.</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        
        
    )
}

export function Lifescience (){

    return (
        <div className="w-full h-full sm:pb-10 flex flex-col justify-center relative">
            
            <div className={`text-justify z-20 rounded-3xl font-default text-[18px] sm:px-8 lg:px-14 lg:py-14 lg:dark:bg-black-gradient lg:bg-white-gradient`}>
                <div className="mb-7">
                    <h3 className="dark:text-white-90 font-title sm:text-[30px] sm:mt-10 text-center lg:text-6xl">Life Science</h3>
                </div>
                <div className="mb-7">
                    <p className="dark:text-gray-400 sm:text-[14px] lg:text-[18px]">
                    Através de nosso conhecimento biológico, criamos uma estratégia  personalizada   para  o  seu
                    negócio utilizando marketing e Life Science. Vamos proporcionar sua evolução potencializando
                    seus resultados, aumentando sua presença digital e solucionando todos os seus problemas de
                    marketing.

                    </p>   
                </div>

                <div className="mb-7">
                    <h6 className="dark:text-white-90 font-bold sm:text-[17px] text-center">Utilizamos Ciência e Inovação!</h6>
                </div>

                <div>
                    <h6 className="dark:text-white-90 font-bold sm:text-[17px] sm:mb-4">Nossos segmentos:</h6>
                    <ul className="dark:text-gray-400 list-disc ml-10 sm:text-[14px]">
                        <li>Representantes de materiais laboratoriais e médico-hospitalares.</li>
                        <li>Prestadores de serviços de suporte e manutenção.</li>
                        <li>Softwares relacionados à Biotech.</li>
                        <li>Indústria de materiais laboratoriais e médico-hospitalares.</li>
                        <br />
                    </ul>
                </div>
                  
            </div>
        </div>
    )
}

