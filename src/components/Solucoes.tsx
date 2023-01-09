import React from 'react';

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
import { Card } from './Card';

export function Solucoes(){

    return (
        <div className="max-w-[1280px] mb-36">
            <h2 className="font-title w-full text-[200px] mb-4">Soluções</h2>
            <div className="flex justify-center w-full">
                <p className="text-center font-default text-[18px] w-6/12 mb-20 ">
                    A ElevenUp tem como objetivo proporcionar os melhores resultados para a sua empresa
                    de Life Science e Healthcare. Pensando nisso, nós oferecemos as melhores soluções para
                    evoluir  seu  negócio  e   elevar sua   marca   no mundo digital! 
                </p>
            </div>
            <div className="min-w-[1280px] flex items-center justify-center">
                <div style={{perspective: 2000}}> 
                     <div className="flex relative items-center justify-center ">
                            
                            <Card shadow="shadow-3xl" title="Inbound Marketing" rosa={rosa1} icon={inbound} />    
                            <Card shadow="shadow-3xl" title="Consultoria em Inteligência de Mercado" rosa={rosa2} icon={consult} />    
                            <Card shadow="shadow-3xl" title="Gestão de Redes Sociais" rosa={rosa3} icon={gestao} />    
                            <Card shadow="shadow-3xl" title="Desenvolvimento WEB" rosa={rosa4} icon={dev} />    
                            <Card shadow="shadow-3xl" title="Geração de Leads Qualificados" rosa={rosa5} icon={geracao} />    
                            <Card shadow="shadow-3xl" title="Criação de Conteúdo" rosa={rosa6} icon={criacao} />    
                    </div>
                </div>
            </div>
        </div>
    )
}