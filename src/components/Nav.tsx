import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import '../styles/main.css'
import { motion, } from "framer-motion"
import logo from '../assets/logo.png'
import { BiMenuAltRight, BiX } from "react-icons/bi";
import iDna from "../assets/icons/menu-dna.svg"
import { FaCat } from "react-icons/fa";;
import iFace from "../assets/icons/iface.svg"
import iInsta from "../assets/icons/iinsta.svg"
import iLink from "../assets/icons/ilinkedin.svg"
import '../styles/main.css'


export function Nav() {
    const [icon, setIcon] = useState(false) //Variável state que guarda valor bool para trocar o ícone
    const [handleOpen, setHandleOpen] = useState(false) //Variável state que guarda valor bool para abrir o menu
    const [text, setText] = useState('')
    const [showMenu, setShowMenu] = useState(false)

    // Função para trocar o icone com hover
    function handleIconOver() {
        setIcon(true)
        // console.log(!icon)
    }
    // Função para trocar o icone com hover
    function handleIconOut() {
        setIcon(false)
        //console.log(!icon)
    }

    //Função para abrir e fechar o menu
    function handleMenu() {
        setHandleOpen(handleOpen => !handleOpen)
    }

    function handleMouseOver(value: number) {
        if (value === 1) {
            setText('Home')
        } else if (value === 2) {
            setText('Quem Somos')
        } else if (value === 3) {
            setText('Equipe')
        } else if (value === 4) {
            setText('Cases')
        } else if (value === 5) {
            setText('Blog')
        } else if (value === 6) {
            setText('Contato')
        }
    }

    const handleBgMenu = () => {
        if (window.scrollY > 100) {
            setShowMenu(true)
            //console.log(showMenu)
        } else {
            setShowMenu(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleBgMenu)
        return () => window.removeEventListener("scroll", handleBgMenu)
    }, [])

    return (
        <div className="w-screen absolute top-0 z-50 ">

            <div className="flex justify-center">
                <motion.div className={`${showMenu ? 'bg-white-80 backdrop-blur-md lg:w-[1100px] lg:mt-4 lg:rounded-full sm:w-full ' : 'lg:transition-all duration-700 ease-in-out delay-400 bg-transparent'} 
                                            transition-all duration-700 ease-in-out delay-400 w-full lg:px-16 h-24 flex sm:pl-5 items-center justify-between fixed`}>
                    <a href="/"><img className="lg:w-32 sm:w-24" src={logo} /></a>

                    <div className={`${showMenu ? 'flex gap-2 -ml-16 ' : 'hidden'} sm:hidden  transition-all duration-700 ease-in-out delay-400`}>
                        <img src={iInsta} className="w-6 hover:cursor-pointer opacity-40 hover:opacity-100 hover:w-10 transition-opacity ease-in delay-75" />
                        <img src={iFace} className="w-6 hover:cursor-pointer opacity-40 hover:opacity-100 hover:w-10 transition-opacity ease-in delay-75" />
                        <img src={iLink} className="w-6 hover:cursor-pointer opacity-40 hover:opacity-100 hover:w-10 transition-opacity ease-in delay-75" />

                    </div>

                    {/* Desktop */}
                    <div className=" w-16">
                            <motion.div className=" rounded-full  p-3  lg:bg-white-100 border-white-100 hover:bg-transparent hover:cursor-pointer hover:border-none"
                                whileHover={{ rotate: 180 }}
                                onHoverStart={handleIconOver}
                                onHoverEnd={handleIconOut}
                                transition={{ type: "spring", damping: 10 }}>
                                {!icon ? <a onClick={handleMenu}><BiMenuAltRight size={40} /></a> : <button onClick={handleMenu}><img className="h-[46px]" alt="DNA" src={iDna} /></button>}
                            </motion.div> 
                    </div>

                </motion.div>
            </div>

            {/* --- Aparecer Menu ---  */}
            <div className={`fixed z-30 overflow-hidden top-0 transition duration-500 ease-in-out transform ${handleOpen ? 'translate-x-0 overflow-hidden' : 'translate-x-full overflow-y-hidden'}  w-full h-full`}>
                <div className="bg-white-150 min-w-full min-h-full absolute z-10 object-cover">
                    <div id="renderSurface" className="min-w-full min-h-full absolute z-10 object-cover opacity-60 blur-sm"></div>
                    <BiX onClick={handleMenu} className="absolute top-8 right-16 z-20 cursor-pointer" size={60} />
                    <div className="w-screen h-screen absolute flex flex-col justify-center items-center z-10 ">
                        <div className="w-screen absolute h-screen z-0 flex justify-center items-center">
                            <h2 className="fonte-default blur-jj text-[200px] tracking-[60px] opacity-[0.15] font-black uppercase leading-[180px]">{text}</h2>
                        </div>
                        <div className="bg-white-200 opacity-20 backdrop-blur-lg w-screen absolute h-screen z-10 flex justify-center items-center">
                        </div>
                        <ul className="font-default font-extrabold z-20 uppercase lg:leading-[100px] sm:leading-[80px] lg:text-7xl sm:text-3xl ">
                            <li onMouseOver={() => handleMouseOver(1)} className="lg:hover:text-8xl hover:cursor-pointer "><a href="/">Home</a></li>
                            <li onMouseOver={() => handleMouseOver(2)} className="hover:text-8xl hover:cursor-pointer "><a href="/quem-somos">Quem Somos</a></li>
                            <li onMouseOver={() => handleMouseOver(3)} className="hover:text-8xl hover:cursor-pointer "><a href="/equipe">Equipe</a></li>
                            <li onMouseOver={() => handleMouseOver(4)} className="hover:text-8xl hover:cursor-pointer "><a href="/cases">Cases</a></li>
                            {/* <li onMouseOver={() => handleMouseOver(5)} className="hover:text-8xl hover:cursor-pointer "><Link href="/blog">Blog</Link></li> */}
                            <li onMouseOver={() => handleMouseOver(6)} className="hover:text-8xl hover:cursor-pointer "><a href="/contato">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}



