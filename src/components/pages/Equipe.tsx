import React, {useState} from "react"
import { motion, } from "framer-motion"
import { Nav } from "../Nav"
import { listaEquipe } from "../DataEquipe"
import iFace from "../../assets/icons/redes-sociais/iface.svg"
import iInsta from "../../assets/icons/redes-sociais/iinsta.svg"
import iLink from "../../assets/icons/redes-sociais/ilinkedin.svg"
import iFaceB from "../../assets/icons/redes-sociais/iface-branco.svg"
import iInstaB from "../../assets/icons/redes-sociais/iinsta-branco.svg"
import iLinkB from "../../assets/icons/redes-sociais/ilinkedin-branco.svg"
import { Footer, FooterMobile } from "../Footer"
import { useTranslation } from "react-i18next"

export function Equipe(){
    const { t, i18n} = useTranslation()
    return (
        <div className="bg-gray-200 dark:bg-black-900 overflow-x-hidden">
            <div className="absolute inicio top-0 bg-transparent"></div>

            <div className="relative w-screen min-h-screen flex flex-col items-center justify-center text-center mb-10 ">
                {/* --------- Header (logo e menu) --------- */}
                <Nav  />           
                {/* --------- Fim - Header (logo e menu) --------- */} 
                <div className="max-w-[1280px] mt-40">
                    <h1 className="dark:text-white-90 font-title tracking-wider font-bold sm:text-[80px] lg:text-[150px]">{t('Equipe')}</h1>
                    <div className="w-full flex flex-wrap overflow-hidden lg:justify-start sm:justify-center sm:gap-5 lg:gap-10">
                        {listaEquipe.map(item => (
                            <CardEquipe key={item.nome} nome={item.nome} funcao={item.funcao} img={item.img}  rede1={item.rede1} rede2={item.rede2} imgRede1={item.imgRede1} imgRede2={item.imgRede2} imgRede1Branco={item.imgRede1Branco} imgRede2Branco={item.imgRede2Branco}/>
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
    img: string,
    rede1: any,
    rede2: any,
    imgRede1: string,
    imgRede2: any,
    imgRede1Branco: string,
    imgRede2Branco: any,
    
}
export function CardEquipe({nome, funcao, img, rede1, rede2, imgRede1, imgRede2, imgRede1Branco, imgRede2Branco}:equipeProps ){
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
            <div className="flex flex-col items-center justify-center dark:text-white-90">
                <span className="font-default font-regular mt-2 sm:text-[20px] lg:text-[24px]">{nome}</span>
                <span className="font-default font-thin -mt-1 mb-2 text-[16px]">{funcao}</span>
                <div className="flex gap-4 items-center justify-center">
                    <a target="_blank" href={rede1}>
                        <img className="w-6 dark:hidden block" src={imgRede1} />
                        <img className="w-6 dark:block hidden" src={imgRede1Branco} />
                    </a> 
                    {
                        rede2 == null ? '' :
                        <a target="_blank" href={rede2}>
                        <img className="w-6 dark:hidden block" src={imgRede2} />
                        <img className="w-6 dark:block hidden" src={imgRede2Branco} />
                    </a>
                    }
                    
                </div>
            </div>
        </motion.div>
    )
}