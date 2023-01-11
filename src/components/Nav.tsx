import React, {useState} from "react";
import { motion, } from "framer-motion"
import logo from '../assets/logo.png'
import { BiMenuAltRight, BiDna } from "react-icons/bi";
import { FaCat } from "react-icons/fa"; 
    
import dna from '../assets/icons/dna.svg' 

export function Nav () {
    const [icon, setIcon] = useState(false) //Variável state que guarda valor bool para trocar o ícone
    const [handleOpen, setHandleOpen] = useState(false) //Variável state que guarda valor bool para abrir o menu

    // Função para trocar o icone com hover
    function handleIcon(){
        setIcon(icon => !icon)
        console.log(!icon)
    }

    //Função para abrir e fechar o menu
    function handleMenu(){
        setHandleOpen(handleOpen => !handleOpen)
        console.log(!handleOpen)
    }

    return (
        <div className="w-screen h-full ">
            <div className="w-full px-72 h-20 flex items-center justify-between " >
                <img className="w-36" src={logo}></img>
                <div className="w-16">
                    <motion.div 
                        className={`rounded-full p-3 ${!icon ? 'bg-white-100' : null} border-white-100  hover:cursor-pointer hover:border-none`}
                        whileHover={{rotate: 180 }}
                        onHoverStart={handleIcon}
                        onHoverEnd={handleIcon}
                        transition={{type:"spring", damping: 6}}>
                                
                        
                        {!icon ?  <BiMenuAltRight size={40} /> : <button onClick={handleMenu}><BiMenuAltRight size={40} /></button> }
                    </motion.div>
                </div>
            </div>

            {/* --- Aparecer Menu ---  */}
            <div className={`fixed z-30 top-0 ${handleOpen ? 'translate-x-0' : 'translate-x-full overflow-y-hidden'}  w-full h-full overflow-hidden`}>
                <div className="bg-white-100 min-w-full min-h-full absolute z-10 object-cover" > 
                    <div id="renderSurface" className="min-w-full min-h-full absolute z-10 object-cover opacity-60 blur-sm"></div> 
                    <FaCat onClick={handleMenu} className="absolute top-4 right-10 z-20 cursor-pointer" size={40} />
                    <div className="w-screen h-screen absolute flex flex-col justify-center items-center z-10 ">
                        <ul className="font-default font-black leading-[140px] text-8xl ">
                            <li className="hover:text-9xl hover:cursor-pointer "><a href="#">Quem Somos</a></li>
                            <li className="hover:text-9xl hover:cursor-pointer "><a href="#">Home</a></li>
                            <li className="hover:text-9xl hover:cursor-pointer "><a href="#">Equipe</a></li>
                            <li className="hover:text-9xl hover:cursor-pointer "><a href="#">Cases</a></li>
                            <li className="hover:text-9xl hover:cursor-pointer "><a href="#">Blog</a></li>
                            <li className="hover:text-9xl hover:cursor-pointer "><a href="#">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div> 
    )
}



