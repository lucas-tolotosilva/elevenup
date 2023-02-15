import React, { useState } from "react"
import { Footer } from "../Footer"
import { listaQuemSomos } from "../DataQuemSomos"
import { Nav } from "../Nav"
import img1 from "../../assets/quem-somos.jpg"




export function QuemSomos() {
    return (
        
        <div className="bg-gray-200 overflow-x-hidden">
            <div className="relative w-screen min-h-screen flex flex-col items-center justify-center text-center mb-10 ">
                <Nav />

                <div className="inicio max-w-[1280px] mt-32">
                    <h1 className="font-title tracking-wider font-bold mb-20 text-[150px]">quem somos</h1>
                    <div className="flex justify-end  items-center">
                        <img className="w-1/2 cover rounded-3xl" src={img1} />
                        <div className="text-justify px-10 py-5 rounded-3xl -ml-52 backdrop-blur-md font-default text-[15px] bg-white-80 ">
                            <p>
                                A ElevenUp – Life Science and Healthcare Marketing – nasceu
                                em 2019 com a proposta de realizar um trabalho de marketing
                                voltado para as empresas de saúde humana e animal, além de
                                atender startups de biotecnologia.
                                <br /><br />
                                Percebemos que ao mesmo tempo que existiam diversas agências
                                de publicidade no mercado, existiam muito poucas capazes de
                                fornecer uma assessoria completa na área de marketing (4ps –
                                preço, praça, propaganda e produto) e entender as particulares
                                de um mercado que cada vez mais exige conteúdos com embasamento
                                científico e técnico. Desta forma formamos uma equipe com
                                conhecimento em ferramentas de marketing e inteligência de
                                mercado e que ao mesmo tempo possuíam background científico.
                            </p>
                        </div>
                    </div>
                    <div className="font-default text-4xl mt-28">
                        <p>
                            Nosso time contém especialistas em:
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className="w-full py-10 flex flex-wrap items-center justify-center overflow-hidden gap-10">
                        {listaQuemSomos.map(item => (
                            <CardQuemSomos key={item.nome} img={item.img} nome={item.nome} />
                        ))}
            </div>
            <div className="font-default flex items-center justify-center text-center text-xl">
                        <p>
                        Além de Biomédicos e Biólogos com mestrado e doutorado e
                        <br />Engenheiros de Bioprocessos, formados nas mais renomadas
                        universidades do país.
                        </p>
                    </div>
            <div className="w-screen bg-black-900 h-48 text-white-100 font-default text-center text-2xl flex justify-center items-center mt-14 mb-14">
                <span>
                    
                    Venha para a ElevenUp e evolua para o mundo digital!</span>
            </div>
            <div className="w-screen flex items-center justify-center">
                <div className="max-w-[1280px] text-justify ">
                    <p>
                    Assim, ao se unir a ElevenUp você estará junto a
                    profissionais que entendem do seu negócio e utilizam
                    as melhores ferramentas para desenvolver sua empresa,
                    fazer você se relacionar com seu cliente e vender mais!
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-center pt-64'>
                <Footer />
            </div>
        </div>
    )
}
type quemSomosProps={
    img: String,
    nome: String
}
export function CardQuemSomos({ img, nome}:quemSomosProps ){
//     const [show, setShow] = useState(false)
    
//    function handleMouseOver() {
//     setShow(true)
//    }
//    function handleMouseOut() {
//     setShow(false)
//    }
    return(
        <div className='w-[280px] h-[280px]'>
            <div className="w-full flex flex-col items-center justify-center cover">
                <img className='object-cover  w-[194px] h-[194px]' />
                <div className="flex flex-col items-center justify-center">
                    <span className="font-default text-center mt-2 text-lg">{nome}</span>
                </div>
            </div>
        </div>
        )
    }