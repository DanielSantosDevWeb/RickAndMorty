
import { Routes, Route } from "react-router-dom"
import NavBar from "./elements/NavBar"
import { ContainerStyled } from "./elements/ContainerStyled"
import Home from "./pages/Home"
import Personagens from "./pages/Personagens"
import Mundos from "./pages/Mundos"

function App() {

  return (
    <>
      <NavBar />
      <div>
        <ContainerStyled>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personagens" element={<Personagens />} />
            <Route path="/mundos" element={<Mundos />} />
          </Routes>

        </ContainerStyled>
      </div>
    </>
  )
}

export default App
