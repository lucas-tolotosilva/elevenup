import React, {useState} from "react"
import { Footer } from "../Footer"
import { Nav } from "../Nav"
import img from "../../assets/img-contato.jpg"

export function Contato(){
    const [focus, setFocus] = useState(false)

    function handleFocus () {

    }

    return (
        <div className="bg-gray-200 overflow-x-hidden">
        <div className="relative w-screen min-h-screen flex flex-col items-center justify-center text-center mb-96 ">
            {/* --------- Header (logo e menu) --------- */}
            <Nav  />           
            {/* --------- Fim - Header (logo e menu) --------- */} 
            <div className="max-w-[1280px] bg-gray-200 absolute top-40">
                <h1 className="font-title tracking-wider mb-24   font-bold text-[200px]">CONTATO</h1>
                <div className="w-full flex flex-wrap overflow-hidden gap-10">
                    <form>
                        <div className="min-w-[1000px] flex rounded-3xl overflow-hidden bg-white-100">
                            <div className="w-3/5 rounded-tl-3xl relative bg-pink-50">
                                <img className="w-full h-full object-cover" src={img}/>
                                <div className="absolute flex items-center justify-center top-0 w-full h-full bg-white-80 backdrop-blur-xl">
                                    <h2 className="font-default font-semibold text-[30px] mx-20">
                                        Preencha o Formulário para entrar em contato conosco! <br /><br />
                                        Responderemos o mais rápido possível
                                    </h2>
                                </div>
                                
                            </div>
                            <div className="w-2/5 px-14 py-14 font-default bg-white-80">
                                <div className="relative">
                                    <input onfocus={handleFocus()} className="relative w-full border-none bg-transparent py-2 outline-none transition duration-100" required/>
                                    <span className="absolute p-2 left-0 pointer-events-none">Nome</span>
                                </div>
                                <div>
                                    <input  className="relative outline-none"/>
                                    <span>Telefone</span>
                                </div>
                                <div>
                                    <input  className="relative outline-none "/>
                                    <span className="absolute">Email</span>
                                </div>
                                <div>
                                    <textarea   className="relative outline-none "/>
                                    <span>Mensagem</span>
                                </div>
                            </div>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
            <div className='flex items-center justify-center pt-96'>
                <Footer />
            </div>
    </div> 
    )
}