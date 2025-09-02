import { useState } from 'react'
import './App.css'

function App() {
  
  const singleClick = () => {
    console.log("Single click")
  }

  const doubleClick = () => {
    console.log("double click")
  }
  return (
    <>
      <button
      onClick={singleClick}
      onDoubleClick={doubleClick}
      >
        Click Here
      </button>
    </>
  )
}

export default App
