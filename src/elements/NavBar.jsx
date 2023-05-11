import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarStyled } from './NavBarStyled'
import { ImEarth } from 'react-icons/im'


function NavBar() {
  return (
    <NavBarStyled>
      <ul>
        <li><Link to='/personagens'>Personagens</Link></li>
        <li className='home' ><Link to='/'> <ImEarth /> </Link></li>
        <li><Link to='/episodios' >Episodios</Link></li>
      </ul>
    </NavBarStyled>
  )
}

export default NavBar