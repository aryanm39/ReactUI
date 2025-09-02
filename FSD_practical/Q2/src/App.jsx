import { useState } from 'react'
import './App.css'

function App() {

  return <ListOfMovies/>
  
}

function ListOfMovies(){
  const listOfMovies = ['movieOne', 'movieTwo', 'movieThree', 'movieFour', 'movieFive']
  return (
    <>
      <h3>List of movies</h3>
      <ul>
      {listOfMovies.map((movie, index) => <li key={index}>{movie}</li>)}
      </ul>
    </>
  )
}
export default App
