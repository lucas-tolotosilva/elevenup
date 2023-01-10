import React, {useState} from "react";
import { motion, } from "framer-motion"
import logo from '../assets/logo.png'
import { BiMenuAltRight, BiDna } from "react-icons/bi";
import dna from '../assets/icons/dna.svg' 
import { FaCat } from "react-icons/fa";
import rer from '../assets/rer.jpg'

export function Nav () {
    const [icon, setIcon] = useState(false)
    const [handleOpen, setHandleOpen] = useState(false)

    function handleIcon(){
        setIcon(icon => !icon)
        console.log(!icon)
    }

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
                                
                        
                        {!icon ?  <BiMenuAltRight size={40} /> : <button onClick={handleMenu}><img className="rounded-full w-[70px]" src={dna} /></button> }
                    </motion.div>
                </div>
            </div>

            {/* --- Aparecer Menu ---  */}
            <div className={`fixed z-30 top-0 ${handleOpen ? 'translate-x-0' : 'translate-x-full overflow-y-hidden'}  w-full h-full overflow-hidden`}>
                <img className="min-w-full min-h-full absolute z-10 object-cover" src={rer}/>
                <FaCat onClick={handleMenu} className="absolute top-4 right-10 z-20 cursor-pointer" size={40} />
                <div className="w-screen h-screen absolute flex flex-col justify-center items-center z-10 ">
                    <ul className="font-title leading-[150px] text-[150px]">
                        <li>Texto 1</li>
                        <li>Texto 1</li>
                        <li>Texto 1</li>
                        <li>Texto 1</li>
                        <li>Texto 1</li>
                    </ul>
                   
                    
                </div>
            </div>

        </div> 
    )
}



