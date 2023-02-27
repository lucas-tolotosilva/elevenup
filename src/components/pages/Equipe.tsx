import React, {useState} from "react"
import { motion, } from "framer-motion"
import { Nav } from "../Nav"
import { listaEquipe } from "../DataEquipe"
import iFace from "../../assets/icons/iface.svg"
import iInsta from "../../assets/icons/iinsta.svg"
import iLink from "../../assets/icons/ilinkedin.svg"
import { Footer, FooterMobile } from "../Footer"

export function Equipe(){
    return (
        <div className="bg-gray-200 overflow-x-hidden">
            <div className="relative w-screen min-h-screen flex flex-col items-center justify-center text-center mb-10 ">
                {/* --------- Header (logo e menu) --------- */}
                <Nav  />           
                {/* --------- Fim - Header (logo e menu) --------- */} 
                <div className="max-w-[1280px] bg-gray-200 mt-40">
                    <h1 className="font-title tracking-wider font-bold sm:text-[80px] lg:text-[150px]">EQUIPE</h1>
                    <div className="w-full flex flex-wrap overflow-hidden lg:justify-start sm:justify-center sm:gap-5 lg:gap-10">
                        {listaEquipe.map(item => (
                            <CardEquipe key={item.nome} nome={item.nome} funcao={item.funcao} insta={item.insta} face={item.face} linkedin={item.linkedin} img={item.img} />
                        ))}
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
                 {/* DESKTOP */}
                <div className='lg:flex sm:hidden lg:items-center lg:justify-center pt-96'>
                <Footer />
                </div>
                {/* MOBILE */}
                <div className='sm:inline lg:hidden text-center'>
                <FooterMobile />
                </div>
        </div> 
    )
}

type equipeProps={
    nome: string,
    funcao: string,
    insta: string,
    face: string,
    linkedin: string,
    img: string
}
export function CardEquipe({nome, funcao, insta, face, linkedin, img}:equipeProps ){
    const [show, setShow] = useState(false)
    
   function handleMouseOver() {
    setShow(true)
   }
   function handleMouseOut() {
    setShow(false)
   }

    return(
        <motion.div className={`${show ? 'lg:w-[280px] lg:h-[280px] sm:w-[180px] sm:h-[300px] ' : 'lg:w-[280px] lg:h-[280px] sm:w-[180px] sm:h-[300px] overflow-hidden'} lg:pointer-events-auto sm:pointer-events-none mt-10 backdrop-blur-sm bg-gray-80 rounded-2xl`}
                onHoverStart={handleMouseOver}
                onHoverEnd={handleMouseOut}
                transition={{delay:20 }}>
            <div className="w-full flex justify-center cover">
                <img className={`${show ? '-mt-6 lg:w-[194px] lg:h-[194px] sm:w-[150px] sm:h-[150px] ' : ' lg:w-[280px] lg:h-[280px] sm:w-[180px] sm:h-[180px] transition-all ease-out duration-75 delay-75'} transition-all ease-in-out duration-500 rounded-t-2xl object-cover`} src={img} />
            </div>
            <div className="flex flex-col items-center justify-center">
                <span className="font-default font-regular mt-2 sm:text-[20px] lg:text-[24px]">{nome}</span>
                <span className="font-default font-thin -mt-1 mb-2 text-[16px]">{funcao}</span>
                <div className="flex gap-4 items-center justify-center">
                    <a target="_blank" href={insta}><img className="w-6 " src={iInsta} /></a> 
                    <a target="_blank" href={face}><img className="w-6 " src={iFace} /></a>
                    <a target="_blank" href={linkedin}><img className="w-6 " src={iLink} /></a>
                </div>
            </div>
        </motion.div>
    )
}