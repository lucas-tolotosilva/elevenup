import React from "react";
import { Blog } from './Blog'
import { Clientes } from './Clientes'
import { Combinacao } from './Combinacao'
import { Compromissos } from './Compromissos'
import { Footer } from './Footer'
import { Header } from './Header'
import { Segmentos } from './Segmentos'
import { Solucoes } from './Solucoes'
//import Slider from './components/Slider'
import { Testes } from './Testes'
import '../styles/main.css'

export function Home () {
    return (
      <div className="">
        
          <Header />
        
        <div className='flex items-center justify-center'>
          <Compromissos />
        </div>
        
        <div className='flex items-center justify-center'>
          <Segmentos />
        </div>

        <div className='flex items-center justify-center'>
          <Clientes />
        </div>

        <div className='flex items-center justify-center'>
          <Solucoes />
        </div>

        <div className='flex items-center justify-center'>
          <Blog />
        </div>

        <div className='flex items-center justify-center'>
          <Combinacao />
        </div>

        <div className='flex items-center justify-center'>
          <Footer />
        </div>

        
      </div>
    )
}