import React, {useState} from "react"
import { Footer } from "../Footer"
import { Nav } from "../Nav"
import img from "../../assets/img-contato.jpg"

export function Contato(){
    const [focus, setFocus] = useState(false)
    const [focus2, setFocus2] = useState(false)
    const [focus3, setFocus3] = useState(false)
    const [focus4, setFocus4] = useState(false)

    return (
        <div className="bg-gray-200 overflow-x-hidden">
        <div className="relative w-screen min-h-screen flex flex-col items-center justify-center text-center mb-96 ">
            {/* --------- Header (logo e menu) --------- */}
            <Nav  />           
            {/* --------- Fim - Header (logo e menu) --------- */} 
            <div className="max-w-[1280px] bg-gray-200 absolute top-40">
                <h1 className="font-title tracking-wider mb-24   font-bold text-[200px]">CONTATO</h1>
                <div className="w-full flex flex-wrap overflow-hidden">
                    <form>
                        <div className="w-[1000px] flex justify-center items-center rounded-3xl overflow-hidden bg-white-100">
                            <div className="w-1/2 rounded-tl-3xl relative">
                                <img className="w-full h-full object-contain" src={img}/>
                                <div className="absolute flex items-center justify-center top-0 w-full h-full bg-white-50 backdrop-blur-sm">
                                    
                                </div>
                                
                            </div>
                            <div className="w-1/2 px-14 py-14 font-default text-blue-800 text-[18px] bg-white-80">
                                <div className="relative my-10">
                                    <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className="relative w-full border-none bg-transparent py-2 outline-none " required/>
                                    <span className={`${focus ? '-translate-y-[32px] text-[16px] ' : null} transition-all duration-400 absolute py-2 left-0 pointer-events-none`}>Nome</span>
                                    <i className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full"></i>
                                </div>
                                <div className="relative my-10">
                                    <input onFocus={() => setFocus2(true)} onBlur={() => setFocus2(false)} className="relative w-full border-none bg-transparent py-2 outline-none " required/>
                                    <span className={`${focus2 ? '-translate-y-[32px] text-[16px] ' : null} transition-all duration-400 absolute py-2 left-0 pointer-events-none`}>Telefone</span>
                                    <i className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full"></i>
                                </div>
                                <div className="relative my-10">
                                    <input onFocus={() => setFocus3(true)} onBlur={() => setFocus3(false)} className="relative w-full border-none bg-transparent py-2 outline-none " required/>
                                    <span className={`${focus3 ? '-translate-y-[32px] text-[16px] ' : null} transition-all duration-400 absolute py-2 left-0 pointer-events-none`}>Email</span>
                                    <i className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full"></i>
                                </div>
                                <div className="relative my-10">
                                    <textarea onFocus={() => setFocus4(true)} onBlur={() => setFocus4(false)} className="relative w-full border-none bg-transparent py-2 outline-none " required/>
                                    <span className={`${focus4 ? '-translate-y-[32px] text-[16px] ' : null} transition-all duration-400 absolute py-2 left-0 pointer-events-none`}>Mensagem</span>
                                    <i className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full"></i>
                                </div>
                            </div>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
            <div className='flex items-center justify-center pt-64'>
                <Footer />
            </div>
    </div> 
    )
}