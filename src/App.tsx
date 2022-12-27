import { Compromissos } from './components/Compromissos'
import { Header } from './components/Header'
import { Testes } from './components/Testes'
import './styles/main.css'

function App() {

  return (
    <div className="app bg-gray-200 text-center">
      <Header />
      <div className='bg-gray-200 flex items-center justify-center'>
        <Compromissos />
      </div>
      {/* <Testes /> */}
    </div>
  )
}

export default App
