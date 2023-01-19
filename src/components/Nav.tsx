import React, {useEffect, useState} from "react";
import {Link, BrowserRouter as Router, Switch, } from "react-router-dom"
import '../styles/main.css'
import { motion, } from "framer-motion"
import logo from '../assets/logo.png'
import { BiDna, BiMenuAltRight } from "react-icons/bi";
import { FaCat } from "react-icons/fa"; 
import { Home } from "./pages/Home";
import '../styles/main.css'    


export function Nav () {
    const [icon, setIcon] = useState(false) //Variável state que guarda valor bool para trocar o ícone
    const [handleOpen, setHandleOpen] = useState(false) //Variável state que guarda valor bool para abrir o menu
    const [text, setText] = useState('')

    // Função para trocar o icone com hover
    function handleIconOver(){
        setIcon(true)
        console.log(!icon)
    }
    // Função para trocar o icone com hover
    function handleIconOut(){
        setIcon(false)
        console.log(!icon)
    }

    //Função para abrir e fechar o menu
    function handleMenu(){
       setHandleOpen(handleOpen => !handleOpen)
    }

    function handleMouseOver(value: number){
        if(value === 1){
            setText('Home')
        } else if (value === 2){
            setText('Quem Somos')
        } else if (value === 3){
            setText('Equipe')
        } else if (value === 4){
            setText('Cases')
        } else if (value === 5){
            setText('Blog')
        } else if (value === 6){
            setText('Contato')
        }
    }

    return (
        <div className="w-screen h-full">
            <div className="w-full px-16 h-20 flex items-center justify-between " >
                <img className="w-36" src={logo}></img>
                <div className="w-16">
                    <motion.div 
                        className={`rounded-full p-3 bg-white-100 border-white-100 hover:bg-transparent hover:cursor-pointer hover:border-none`}
                        whileHover={{rotate: 180 }}
                        onHoverStart={handleIconOver}
                        onHoverEnd={handleIconOut}
                        transition={{type:"spring", damping: 10}}>
                                
                        
                        { !icon ?  <BiMenuAltRight size={40} /> : <button onClick={handleMenu}><BiDna size={40} /></button> }
                    </motion.div>
                </div>
            </div>
           
            {/* --- Aparecer Menu ---  */}
            <div className={`fixed z-30 top-0 transition duration-500 ease-in-out transform ${handleOpen ? 'translate-x-0' : 'translate-x-full overflow-y-hidden'}  w-full h-full`}>  
                <div className="bg-white-150 min-w-full min-h-full absolute z-10 object-cover">
                    <div id="renderSurface" className="min-w-full min-h-full absolute z-10 object-cover opacity-60 blur-sm"></div> 
                    <FaCat onClick={handleMenu} className="absolute top-8 right-16 z-20 cursor-pointer" size={40} />
                    <div className="w-screen h-screen absolute flex flex-col justify-center items-center z-10 ">
                        <div className="w-screen absolute h-screen z-0 flex justify-center items-center">
                            <h2 className="fonte-default blur-jj text-[200px] tracking-[60px] opacity-[0.15] font-black uppercase leading-[180px]">{text}</h2>
                        </div> 
                        <div className="bg-white-200 opacity-20 backdrop-blur-lg w-screen absolute h-screen z-10 flex justify-center items-center">
                        </div> 
                        <Router >
                            <ul className="font-default font-extrabold z-20 uppercase leading-[100px] text-7xl ">
                                <li onMouseOver={() => handleMouseOver(1)} className="hover:text-8xl hover:cursor-pointer "><Link to="/" >Home</Link></li>
                                <li onMouseOver={() => handleMouseOver(2)} className="hover:text-8xl hover:cursor-pointer "><Link to="/quem-somos" >Quem Somos</Link></li>
                                <li onMouseOver={() => handleMouseOver(3)} className="hover:text-8xl hover:cursor-pointer "><Link to="/equipe" >Equipe</Link></li>
                                <li onMouseOver={() => handleMouseOver(4)} className="hover:text-8xl hover:cursor-pointer "><Link to="/cases" >Cases</Link></li>
                                <li onMouseOver={() => handleMouseOver(5)} className="hover:text-8xl hover:cursor-pointer "><Link to="/blog" >Blog</Link></li>
                                <li onMouseOver={() => handleMouseOver(6)} className="hover:text-8xl hover:cursor-pointer "><Link to="/contato" >Contato</Link></li>
                            </ul>
                        </Router>
                        <Switch>

                        </Switch>
                    </div>
                </div>
            </div>
            

        </div> 
    )
}



