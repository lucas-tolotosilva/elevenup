import { BlogComponent } from '../Blog'
import { Clientes } from '../Clientes'
import { Combinacao } from '../Combinacao'
import { Compromissos } from '../Compromissos'
import { Footer, FooterMobile } from '../Footer'
import { Header } from '../Header'
import { Segmentos } from '../Segmentos'
import { Solucoes } from '../Solucoes'


export function Home () {
    return (
      <div className='bg-gray-200 '>
        <div className="absolute inicio top-0 bg-transparent"></div>
          
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

        {/* <div className='flex items-center justify-center'>
          <BlogComponent />
        </div> */}

        <div className='flex items-center justify-center'>
          <Combinacao />
        </div>

        {/* DESKTOP */}
        <div className='lg:flex sm:hidden items-center justify-center'>
          <Footer />
        </div>
        {/* MOBILE */}
        <div className='sm:inline lg:hidden'>
          <FooterMobile />
        </div>

        
      </div>
    )
}