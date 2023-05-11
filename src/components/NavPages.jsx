import React from 'react'
import { NavPagesStyled } from './NavPagesStyled'
import PrevPage from './PrevPage'
import NextPage from './NextPage'

function NavPages({ InfosPers, setUrl }) {
  return (

    <NavPagesStyled>
      {InfosPers &&
        <>
          {
            InfosPers.prev
              ? <PrevPage dis='' prevP={InfosPers.prev} setUrl={setUrl} />
              : <PrevPage dis='disabled'></PrevPage>
          }
          {
            InfosPers.next
              ? <NextPage dis='' nextP={InfosPers.next} setUrl={setUrl} />
              : <NextPage dis='disabled'></NextPage>
          }

        </>
      }
    </NavPagesStyled>
  )
}

export default NavPages