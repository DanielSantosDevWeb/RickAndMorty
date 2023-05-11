import React from 'react'

function PrevPage({ dis, prevP, setUrl }) {

  const toggleUrl = () => {
    setUrl(prevP)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <button disabled={`${dis}`} onClick={toggleUrl} >Prev Page</button>
    </>
  )
}

export default PrevPage