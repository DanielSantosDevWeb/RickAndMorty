import { useEffect, useState } from "react"
import { Outlet, Link } from "react-router-dom"

function App() {



  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/personagens'>Personagens</Link></li>
          <li><Link to='/episodios' >Episodios</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
