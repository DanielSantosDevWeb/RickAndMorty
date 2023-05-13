import React from 'react'
import { SearchStyled } from './SearchStyled'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

function Search({ setUrl, url, tipo }) {

  const [NickName, setNickName] = useState('')

  const mudarNick = (e) => {
    setNickName(e.target.value);
  }



  const mudarUrl = (e) => {
    e.preventDefault()
    setUrl(`${url}?name=${NickName}`);
    console.log(`${url}?name=${NickName}`);
    console.log(NickName);
  }

  return (
    <SearchStyled>
      <>
        <input type="search" placeholder={`nome do ${tipo}`} onChange={mudarNick} />
        <button type='submit' onClick={mudarUrl}><BsSearch /></button>
      </>
    </SearchStyled>
  )
}

export default Search