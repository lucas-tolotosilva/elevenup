import React from "react"
import { Link } from "react-router-dom"
import virus from "../../assets/erro404.png"
export function ErrorPAge(){
    return (
        <div className="relative overflow-hidden w-screen h-screen flex flex-col items-center justify-center text-center">
            
            <div className="flex justify-center items-center gap-8">
                <div className="w-96 h-96">
                    <img src={virus} />
                </div>

                <div className="w-[400px]">
                    <h1 className="mb-10 font-default text-center"> A página que você procura não está disponível ou não existe. Volte para a página anterior</h1>
                    <Link to="/"><a className=" text-blue-700"> Clique aqui para voltar para a página principal</a></Link>
                </div>
               
            </div>
        </div> 
    )
}