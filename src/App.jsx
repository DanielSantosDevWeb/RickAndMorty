import { useEffect, useState } from "react"
import { Outlet, Link } from "react-router-dom"
import NavBar from "./elements/NavBar"
import { ContainerStyled } from "./elements/ContainerStyled"

function App() {

  return (
    <>
      <NavBar />
      <div>
        <ContainerStyled>

          <Outlet />
        </ContainerStyled>
      </div>
    </>
  )
}

export default App
