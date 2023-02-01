import React from "react"
import { Footer } from "../Footer"
import { Nav } from "../Nav"
import img from "../../assets/quem-somos.jpg"
export function QuemSomos(){
    return (
        <div className="relative overflow-hidden bg-gray-200 w-screen h-screen flex flex-col items-center text-center">
            {/* --------- Header (logo e menu) --------- */}
            <Nav  />           
            
            {/* --------- Fim - Header (logo e menu) --------- */} 
            <div className="absolute top-32 max-w-[1280px] h-screen" >

            <h1 className="font-title w-full text-[100px] mb-4">Quem Somos</h1> 

                <div className="w-full h-full flex text-justify">
                    <div className="w-4/5 float-left">
                        <img className="rounded-lg" src={img}/>    

                    </div>
                    
                        <p>
                            A ElevenUp – Life Science and Healthcare Marketing – nasceu em 2019 com a proposta de realizar um trabalho de 
                            marketing voltado para as empresas de saúde humana e animal, além de atender startups de biotecnologia.
                                <br /><br />
                            Percebemos que ao mesmo tempo que existiam diversas agências de publicidade no mercado, existiam muito poucas
                            capazes de fornecer uma assessoria completa na área de marketing (4ps – preço, praça, propaganda e produto) e 
                            entender as particulares de um mercado que cada vez mais exige conteúdos com embasamento científico e técnico. 
                            Desta forma formamos uma equipe com conhecimento em ferramentas de marketing e inteligência de mercado e que 
                            ao mesmo tempo possuíam background científico.
                                <br /><br />
                            Nosso time contém especialistas em design, tráfego em canais digitais e inteligência de mercado, além de Biomédicos
                            e Biólogos com mestrado e doutorado e Engenheiros de Bioprocessos, formados nas mais renomadas universidades do país.
                                <br /><br />
                            Assim, ao se unir a ElevenUp você estará junto a profissionais que entendem do seu negócio e utilizam as melhores 
                            ferramentas para desenvolver sua empresa, fazer você se relacionar com seu cliente e vender mais!
                                <br /><br />
                            Venha para a ElevenUp e evolua para o mundo digital!
                        </p>
    

                </div>
            </div> 

            
        </div> 
    )
}