import React from 'react'
import { SearchStyled } from './SearchStyled'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

function Search({ setUrl, InfosPers }) {

  const [NickName, setNickName] = useState('')

  const mudarNick = (e) => {
    setNickName(e.target.value);
  }

  const mudarUrl = (e) => {
    e.preventDefault()
    setUrl(`https://rickandmortyapi.com/api/character/?name=${NickName}`);
    console.log(NickName);
  }

  return (
    <SearchStyled>
      <>
        <input type="search" placeholder='Nome do Personagem' onChange={mudarNick} />
        <button type='submit' onClick={mudarUrl}><BsSearch /></button>
      </>
    </SearchStyled>
  )
}

export default Search