import React, { useEffect, useState } from "react";
import '../styles/main.css'
import { motion, } from "framer-motion"
import logo from '../assets/logo.png'
import logoB from '../assets/logo-branco.png'
import { BiMenuAltRight, BiX, BiSun } from "react-icons/bi";
import { FaMoon } from 'react-icons/fa'
import iDna from "../assets/icons/menu-dna.svg"
import iFace from "../assets/icons/redes-sociais/iface.svg"
import iInsta from "../assets/icons/redes-sociais/iinsta.svg"
import iLink from "../assets/icons/redes-sociais/ilinkedin.svg"
import iFaceB from "../assets/icons/redes-sociais/iface-branco.svg"
import iInstaB from "../assets/icons/redes-sociais/iinsta-branco.svg"
import iLinkB from "../assets/icons/redes-sociais/ilinkedin-branco.svg"
import { useTranslation } from 'react-i18next';

export function Nav() {
    const [icon, setIcon] = useState(false) //Variável state que guarda valor bool para trocar o ícone
    const [handleOpen, setHandleOpen] = useState(false) //Variável state que guarda valor bool para abrir o menu
    const [text, setText] = useState('')
    const [showMenu, setShowMenu] = useState(false)
    const [theme, setTheme] = useState(false)    
    const [toggle, setToggle] = useState("")    

    const [btnTranslate, setBtnTranslate] = useState('')

    const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    localStorage.setItem('language', language);
    i18n.changeLanguage(language); // Acesse o método changeLanguage através de i18n

    if(language === 'pt'){
        setBtnTranslate('pt')
    } else if ( language === 'en'){
        setBtnTranslate('en')
    } else {
        setBtnTranslate('es')
    }
  };      
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
            setText(t('QuemSomos'))
        } else if (value === 3) {
            setText(t('Equipe'))
        } else if (value === 4) {
            setText('Cases')
        } else if (value === 5) {
            setText('Blog')
        } else if (value === 6) {
            setText(t('Contato'))
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

    function toggleTheme() {
        const newTheme = !theme; // Alternamos entre true e false
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light"); // Armazenamos a string correspondente ao novo tema
        
      }

      useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
          setToggle(storedTheme);
          setTheme(storedTheme === "dark");
       
        } else {
          setToggle("light");
          setTheme(false);
          localStorage.setItem("theme", "light");
        }

        
        if (theme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
          
      }, [theme]);

      

    return (
        <div className="w-screen absolute top-0 z-50 ">

            <div className="flex justify-center">
                <motion.div className={`${showMenu ? 'bg-white-80 dark:bg-black-100 backdrop-blur-md lg:w-[1100px] lg:mt-4 border-transparent lg:rounded-full sm:w-full ' : 'lg:transition-all duration-700 ease-in-out delay-400 bg-transparent'} 
                                            transition-all duration-700 ease-in-out delay-400  w-full lg:px-16 h-24 flex sm:pl-5 items-center justify-between fixed `}>
                    <a href="/"><img className="lg:w-32 sm:w-24" src={!theme ? logo : logoB} /></a>

                    

                    {/* Desktop */}
                    <div className="flex items-center gap-10">
                        <div className={`${showMenu ? 'lg:flex sm:hidden gap-2 -ml-16 ' : 'hidden'} mr-3 transition-all duration-700 ease-in-out delay-400`}>
                            <a href="https://www.instagram.com/elevenupmktg/?hl=pt-br"><img src={!theme ? iInsta : iInstaB} className="w-6 hover:cursor-pointer opacity-40 hover:opacity-100 hover:w-10 transition-opacity ease-in delay-75" /></a>
                            <a href="https://www.facebook.com/ElevenUpMarketing/"><img src={!theme ? iFace : iFaceB} className="w-6 hover:cursor-pointer opacity-40 hover:opacity-100 hover:w-10 transition-opacity ease-in delay-75" /></a>
                            <a href="https://www.linkedin.com/company/elevenup/"><img src={!theme ? iLink : iLinkB} className="w-6 hover:cursor-pointer opacity-40 hover:opacity-100 hover:w-10 transition-opacity ease-in delay-75" /></a>

                        </div>
                        <div className="flex bg-white-90 h-9 rounded-lg relative">
                            {/* <div className={`${btnTranslate === 'pt' ? 'top-1/2 left-5 -translate-x-1/2 -translate-y-1/2' : btnTranslate === 'en' ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'top-1/2 -right-5 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out delay-400'} transition-all duration-700 ease-in-out delay-400 z-0 absolute w-10 h-11 rounded-lg shadow-lg bg-white-100 `}></div> */}
                            <div className={`
                                ${btnTranslate === 'pt' ? 'top-1/2 left-5 -translate-x-1/2 -translate-y-1/2' : null 
                                || btnTranslate === 'en' ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'top-1/2 left-5 -translate-x-1/2 -translate-y-1/2' 
                                || btnTranslate === 'es' ? 'top-1/2 right-5 translate-x-1/2 -translate-y-1/2' : null} transition-all duration-700 ease-in-out delay-400 z-0 absolute w-10 h-11 rounded-lg shadow-lg bg-white-100 `}></div>
                            <button className="z-10 w-10" onClick={() => handleLanguageChange('pt')}>BR</button>
                            <button className="z-10 w-10" onClick={() => handleLanguageChange('en')}>EN</button>
                            <button className="z-10 w-10" onClick={() => handleLanguageChange('es')}>ES</button>
                        </div>
                        <div onClick={toggleTheme} className={`flex items-center justify-center rounded-md h-10 w-10 cursor-pointer`}>
                           {!theme ? <FaMoon color="#000000" size={20}/> : <BiSun color="#ffc222" size={30}/> } 
                        </div>
                        <div className=" w-16">
                                <motion.div className={`rounded-full  p-3  ${!theme ? 'lg:bg-white-100' : 'lg:bg-white-50' }  hover:bg-transparent hover:cursor-pointer hover:border-none`} 
                                    whileHover={{ rotate: 180 }}
                                    onHoverStart={handleIconOver}
                                    onHoverEnd={handleIconOut}
                                    transition={{ type: "spring", damping: 10 }}>
                                    {!icon ? <a onClick={handleMenu}><BiMenuAltRight color={!theme ? '#000000' : '#ffffff'} size={40} /></a> : <button onClick={handleMenu}><img className="h-[46px]" alt="DNA" src={iDna} /></button>}
                                </motion.div> 
                        </div>

                    </div>

                </motion.div>
            </div>

            {/* --- Aparecer Menu ---  */}
            <div className={`fixed z-30 overflow-hidden top-0 transition duration-500 ease-in-out transform ${handleOpen ? 'translate-x-0 overflow-hidden' : 'translate-x-full overflow-y-hidden'}  w-full h-full`}>
                <div className="bg-white-150 dark:bg-black-900 min-w-full min-h-full absolute z-10 object-cover">
                    <div id="renderSurface" className="min-w-full min-h-full absolute z-10 object-cover opacity-60 blur-sm"></div>
                    <BiX onClick={handleMenu}  className="absolute dark:text-white-90 top-8 right-16 z-20 cursor-pointer" size={60} />
                    <div className="w-screen h-screen absolute flex flex-col justify-center items-center z-10 ">
                        <div className="w-screen absolute h-screen z-0 flex justify-center items-center">
                            <h2 className="fonte-default blur-jj text-[200px] tracking-[60px] opacity-[0.15] font-black uppercase leading-[180px]">{text}</h2>
                        </div>
                        <div className="bg-white-200 opacity-20 backdrop-blur-lg w-screen absolute h-screen z-10 flex justify-center items-center">
                        </div>
                        <ul className="lg:flex sm:hidden flex-col font-default font-extrabold z-20 uppercase lg:leading-[100px] sm:leading-[80px] lg:text-7xl sm:text-3xl ">
                            <li onMouseOver={() => handleMouseOver(1)} className="lg:hover:text-8xl hover:cursor-pointer dark:text-white-90"><a href="/">Home</a></li>
                            <li onMouseOver={() => handleMouseOver(2)} className="lg:hover:text-8xl hover:cursor-pointer dark:text-white-90"><a href="/quem-somos">{t('QuemSomos')}</a></li>
                            <li onMouseOver={() => handleMouseOver(3)} className="lg:hover:text-8xl hover:cursor-pointer dark:text-white-90"><a href="/equipe">{t('Equipe')}</a></li>
                            {/* <li onMouseOver={() => handleMouseOver(4)} className="lg:hover:text-8xl hover:cursor-pointer dark:text-white-90"><a href="/cases">Cases</a></li> */}
                            {/* <li onMouseOver={() => handleMouseOver(5)} className="hover:text-8xl hover:cursor-pointer "><Link href="/blog">Blog</Link></li> */}
                            <li onMouseOver={() => handleMouseOver(6)} className="lg:hover:text-8xl hover:cursor-pointer dark:text-white-90"><a href="/contato">{t('Contato')}</a></li>
                        </ul>
                        <ul className="sm:flex flex-col lg:hidden font-default font-extrabold z-20 uppercase lg:leading-[100px] sm:leading-[80px] lg:text-7xl sm:text-3xl ">
                            <li  className="hover:cursor-pointer dark:text-white-100"><a href="/">Home</a></li>
                            <li  className="hover:cursor-pointer dark:text-white-100"><a href="/quem-somos">{t('QuemSomos')}</a></li>
                            <li  className="hover:cursor-pointer dark:text-white-100"><a href="/equipe">{t('Equipe')}</a></li>
                            {/* <li  className="hover:cursor-pointer dark:text-white-100"><a href="/cases">Cases</a></li> */}
                            {/* <li onMouseOver={() => handleMouseOver(5)} className="hover:text-8xl hover:cursor-pointer "><Link href="/blog">Blog</Link></li> */}
                            <li  className="hover:cursor-pointer dark:text-white-100"><a href="/contato">{t('Contato')}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}



