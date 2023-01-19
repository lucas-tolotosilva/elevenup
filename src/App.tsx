import { Home } from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './styles/main.css'
import { Nav } from './components/Nav'
import { QuemSomos } from './components/pages/QuemSomos'
import { Equipe } from './components/pages/Equipe'
import { Cases } from './components/pages/Cases'
import { Blog } from './components/pages/Blog'
import { Contato } from './components/pages/Contato'

function App() {
  
  return (
    <div className="app bg-gray-200 text-center overflow-hidden">
      <Router>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/quem-somos" element={<QuemSomos />}></Route>
              <Route path="/equipe" element={<Equipe />}></Route>
              <Route path="/cases" element={<Cases />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/contato" element={<Contato />}></Route>
          </Routes>
      </Router>
      <Home />
      
    </div>
  )
}

export default App
