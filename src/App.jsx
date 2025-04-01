import './App.css'
import * as React from "react"

function App(){
  return (
    <body>
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
      <div className="container-botao">
          <button>Ver Programação</button>
      </div>
    </body>
  )
}

export default App
