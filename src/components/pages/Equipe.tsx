import React, {useState} from "react"
import { motion, } from "framer-motion"
import { Nav } from "../Nav"
import { listaEquipe } from "../DataEquipe"
import iFace from "../../assets/icons/iface.svg"
import iInsta from "../../assets/icons/iinsta.svg"
import iLink from "../../assets/icons/ilinkedin.svg"
import { Footer } from "../Footer"

export function Equipe(){
    return (
        <div className="bg-gray-200 overflow-x-hidden">
            <div className="relative w-screen h-screen flex flex-col items-center justify-center text-center mb-96 ">
                {/* --------- Header (logo e menu) --------- */}
                <Nav  />           
                {/* --------- Fim - Header (logo e menu) --------- */} 
                <div className="max-w-[1280px] bg-gray-200 absolute top-40">
                    <h1 className="font-title tracking-wider font-bold text-[200px]">EQUIPE</h1>
                    <div className="w-full flex flex-wrap overflow-hidden gap-10">
                        {listaEquipe.map(item => (
                            <CardEquipe key={item.nome} nome={item.nome} funcao={item.funcao} insta={item.insta} face={item.face} linkedin={item.linkedin} img={item.img} />
                        ))}
                    </div>
                </div>
            </div>
                <div className='flex items-center justify-center pt-96'>
                    <Footer />
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
        <motion.div className={`${show ? 'w-[280px] h-[280px] ' : 'w-[280px] h-[280px] overflow-hidden'} mt-10 backdrop-blur-sm bg-gray-80 rounded-2xl`}
                onHoverStart={handleMouseOver}
                onHoverEnd={handleMouseOut}
                transition={{delay:20 }}>
            <div className="w-full flex justify-center cover">
                <img className={`${show ? 'object-cover -mt-6 w-[194px] h-[194px] ' : 'object-contain w-[280px] h-[280px] transition-all ease-out duration-75 delay-75'} transition-all ease-in-out duration-500 rounded-t-2xl object-cover`} src={img} />
            </div>
            <div className="flex flex-col items-center justify-center ">
                <span className="font-default font-regular mt-2 text-[24px]">{nome}</span>
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