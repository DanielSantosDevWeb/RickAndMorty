import React, { useEffect, useState } from 'react'
import { MundosStyled } from './MundosStyled'
import { MundoStyled } from '../components/MundoStyled'
import Search from '../components/Search'
import NavPages from '../components/NavPages'
import { ButtonBTStyled } from '../components/ButtonBTStyled'
import { AiOutlineArrowUp } from 'react-icons/ai'
import ErrorPage from '../components/ErrorPage'

function Mundos() {

  const [Location, setLocation] = useState('')
  const [LocationInfo, setLocationInfo] = useState('')
  const [Url, setUrl] = useState('https://rickandmortyapi.com/api/location/')
  const [urlPadrao] = useState('https://rickandmortyapi.com/api/location/')

  const BackToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {

    fetch(Url)
      .then(i => i.json())
      .then(obj => {
        setLocation(obj.results)
        setLocationInfo(obj.info)
      })

  }, [Url])

  return (
    <>
      <Search setUrl={setUrl} url={urlPadrao} tipo='mundo' />
      <NavPages InfosPers={LocationInfo} setUrl={setUrl} />
      <MundosStyled>

        {Location &&
          Location.map(i => (
            <MundoStyled key={i.id}>
              <h3>{i.name}</h3>
              <p> <span>Type: </span> {i.type} </p>
              <p> <span>Dimension: </span> {i.dimension} </p>
              <p> <span>Residentes: </span>
                {i.residents.length < '30' & i.residents.length > 0 ? `${i.residents.length} 👪` : null}
                {i.residents.length > '30' ? `${i.residents.length} 👪👪` : null}
                {i.residents.length == 0 ? `${i.residents.length} ❓	 ` : null}
              </p>
            </MundoStyled>
          ))
        }

        {Location ? null : <ErrorPage />}
      </MundosStyled>
      <NavPages InfosPers={LocationInfo} setUrl={setUrl} />
      <ButtonBTStyled onClick={BackToTop} > <AiOutlineArrowUp /> </ButtonBTStyled>
    </>
  )
}

export default Mundos