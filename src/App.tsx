import { Blog } from './components/Blog'
import { Clientes } from './components/Clientes'
import { Combinacao } from './components/Combinacao'
import { Compromissos } from './components/Compromissos'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Segmentos } from './components/Segmentos'
import { Solucoes } from './components/Solucoes'
//import Slider from './components/Slider'
import { Testes } from './components/Testes'
import './styles/main.css'

function App() {
  
  return (
    <div className="app bg-gray-200 text-center overflow-hidden">
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

export default App
