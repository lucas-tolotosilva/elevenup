import React, {useState} from "react";
import videobg from '../assets/videobg.mp4'
import logo from '../assets/logo.png'
import { BiMenuAltRight, BiDna } from "react-icons/bi";
import { motion } from "framer-motion"
import dnaIcon from '../assets/dna.png' 
export function Header () {
    const [icon, setIcon] = useState(false)

   function handleIcon(){
    setIcon(!icon)
    console.log(!icon)
   }
    return (
        <div className="relative h-screen flex flex-col items-center justify-center text-center">
            {/* --------- Vídeo --------- */}
            <div className="absolute w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover" src={videobg} autoPlay loop muted/>
            </div>
            {/* --------- Fim - Vídeo --------- */}

            {/* --------- Header (logo e menu) --------- */}
            <div className="min-w-[1440px] absolute top-0 py-4">
                <div className="flex items-center justify-center">
                    <div className="w-full flex items-center justify-between">
                        <img className="w-36" src={logo}></img>
                      <motion.div 
                            className={`rounded-full p-3 ${!icon ? 'bg-white-100' : null} border-white-100  hover:cursor-pointer hover:border-none`}
                            whileHover={{rotate: 180}}
                            onHoverStart={handleIcon}
                            onHoverEnd={handleIcon}>
                                    
                           {!icon ?  <BiMenuAltRight size={40} /> : <img className="rounde-full w-[40px]" src={dnaIcon} /> }
                        </motion.div>
                    </div>        
                </div>
            </div>
            {/* --------- Fim - Header (logo e menu) --------- */}
        </div> 
    )
}