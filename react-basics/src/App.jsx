//import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  //const [ counter, setCounter ] = useState(0)
  return (
    <>
    {/*Q1*/}
    <div style={{display : 'flex', float : 'left', marginRight : '40px'}}>
    <img src="https://static.vecteezy.com/system/resources/thumbnails/003/715/527/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg" alt="profile"/>
    </div>
    <div>
      <h1 style={{margin : '40px'}}>
        Name : AAAA BBBB CCCC
      </h1>
      <h3>
        this is a short bio
      </h3>
    </div>

    {/*Q2*/}
    {/* <h3>List Of Movies</h3>
    <ul>
      <li>Movie 1</li>
      <li>Movie 2</li>
      <li>Movie 3</li>
      <li>Movie 4</li>
      <li>Movie 5</li>
    </ul> */}

    {/*Q3*/}
    {/* <div>
      <h1>Counter using Virtual DOM</h1>
      <h2 id="count">{count}</h2>
      <input type="button" value="increment" onClick={()=> {setCount(count + 1)}}/>
      <input type="button" value="decrement" onClick={()=> {setCount(count - 1)}}/>
    </div> */}

    {/*Q4*/}
    {/* <Header/>
    <Card title = "Card 1" msg = "this is description 1"/>
    <Card title = "Card 2" msg = "this is description 2"/>
    <Card title = "Card 3" msg = "this is description 3"/>
    <Footer/> */}
    
    </>
  )
}

export default App
