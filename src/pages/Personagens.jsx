import React from 'react'
import { PersonagensStyled } from './PersonagensStyled'
import { useEffect, useState } from 'react'
import { PersonagemStyled } from '../components/PersonagemStyled'
import { ResultsStyled } from '../components/ResultsStyled'
import { ButtonBTStyled } from '../components/ButtonBTStyled'
import { AiOutlineArrowUp } from 'react-icons/ai'
import Search from '../components/Search'
import NavPages from '../components/NavPages'
import { ContainerStyled } from '../elements/ContainerStyled'

function Personagens() {

  const [InfosPers, setInfosPers] = useState()
  const [Personagens, setPersonagens] = useState()
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/?name=')

  useEffect(() => {
    fetch(url)
      .then(item => item.json())
      .then(obj => {
        setInfosPers(obj.info)
        setPersonagens(obj.results)
        console.log(obj.results);
      })
  }, [url])

  const BackToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Search setUrl={setUrl} />

      <ResultsStyled>
        {InfosPers &&
          <>
            <div> <span>Results</span> : {InfosPers.count} </div>
            <div> <span>Pages</span> : {InfosPers.pages}</div>
          </>
        }
      </ResultsStyled>

      <NavPages InfosPers={InfosPers} setUrl={setUrl} />

      <PersonagensStyled>
        {
          Personagens ? Personagens.map(i => (
            <PersonagemStyled key={i.id} >
              <img src={i.image} alt="" />
              <h2> {i.name}</h2>
              <div><span>Specie</span>: {i.species}</div>
              <div><span>Status</span>: {i.status}</div>
              <div><span>Gender</span>: {i.gender}</div>
              <div><span>Origin</span>: {i.origin.name}</div>
            </PersonagemStyled>
          )) : <div>Sem personagens disponiveis</div>
        }
      </PersonagensStyled >

      {InfosPers && (
        <NavPages InfosPers={InfosPers} setUrl={setUrl} />
      )}

      <ButtonBTStyled onClick={BackToTop} > <AiOutlineArrowUp /> </ButtonBTStyled>
    </>
  )
}

export default Personagens