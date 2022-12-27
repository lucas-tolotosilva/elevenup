import Compromisso from './components/Compromisso'
import Header from './components/Header'
import './styles/main.css'

function App() {

  return (
    <div className="App  bg-gray-200 h-screen text-center">
      <Header />
      
      <div className='bg-gray-200 flex items-center justify-center'>
        <Compromisso />
      </div>
      
    </div>
  )
}

export default App
