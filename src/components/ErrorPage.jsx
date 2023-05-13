import React from 'react'
import { ErrorStyled } from './ErrorPageStyled'

function ErrorPage() {
  return (
    <ErrorStyled>
      <h3>Erro na sua pesquisa!!</h3>
      <div>Verifique se digitou o nome correto e tente novamente 😀 </div>

      <p>Caso o erro persista, entre em contato com o <a href="#" target='_blank'>Suporte</a>, que sou eu kkk.</p>
    </ErrorStyled>
  )
}

export default ErrorPage