import React from 'react'
import RickAndMortyPng from './../images/rickandmorty.png'
import { HomeStyled } from './HomeStyled'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

function Home() {
  return (
    <HomeStyled>
      <div className='layout' >
        <h1><span>Rick</span> And Morty</h1>
        <img src={RickAndMortyPng} alt="" />
      </div>
      <div className='text'>

        <div>Navegue no mundo de Rick And Morty, pesquise personagens 👨‍👨‍👧‍👦, navegue entre os mundos 🌎 e varias dimençoes 🌌.  </div>
      </div>
      <div className='info' >
        <h2>Sobre o projeto</h2>
        <div>Criei esse projeto usando a <a href="https://rickandmortyapi.com/" target='_blank'>API Rick And Morty</a> .  Projeto criado com o <span>ReactJs</span>, Usei o <span>Styled Components</span> para a estilizaçao dos componentes. Tambem criei barras de pesquisas para o site ficar mais imersivo. O codigo esta no meu<span> GitHub</span> <a href="https://github.com/DanielSantosDevWeb/RickAndMorty" target='_blank'>Projeto Rick and Morty</a> </div>
      </div>
      <div className='redes' >
        <h2>Minhas redes</h2>
        <div>
          Me siga para saber mais sobre o meu trabalho
        </div>
        <ul>
          <li> <a href="https://github.com/DanielSantosDevWeb" target="_blank"> <FaGithub /> GitHub </a></li>
          <li> <a href="https://www.linkedin.com/in/daniel-santos-4bba1b246" target="_blank"> <FaLinkedin /> Linkedin </a></li>
          <li> <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5583994128864" target="_blank"> <FaWhatsapp /> Whatsapp</a></li>


        </ul>
      </div>
    </HomeStyled>


  )
}

export default Home