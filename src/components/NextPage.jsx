import React from 'react'

function NextPage({ dis, nextP, setUrl }) {

  const toggleUrl = () => {
    setUrl(nextP)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <button disabled={`${dis}`} onClick={toggleUrl} >Next Page</button>
    </>
  )
}

export default NextPage