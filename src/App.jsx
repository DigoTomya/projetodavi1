import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import * as React from "react"
import Programacao from './pages/Programacao'

function App(){
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <h1 className="navbar-titulo">CineLuxe</h1>
          </div>
          <ul className="navbar-nav">
            <li className='navbar-itens'><a href="">Programação</a></li>
            <li className='navbar-itens'><a href="">Contato</a></li>
            <li className='navbar-itens'><a href="">Localização</a></li>
          </ul>
        </div>
      </nav>

      <img src='src\componentes\cinema.jpg' className='imagem-cinema'></img>
      <p>A magia do cinema clássico, agora pertinho de você!</p>
      <Link to="/programacao">
        <button>Ver Programação</button>
      </Link>
      <Routes>
        <Route path="/programacao" element={<Programacao />}/>
      </Routes>
    </div>
  )
}

export default App
