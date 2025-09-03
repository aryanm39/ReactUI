import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log("Email : " + email + " Pass : " + pass)
      }}>
        <br />
        <input 
        type='text'
        onInput={(e) => setEmail(e.target.value)}
        placeholder='Enter Email'
        required
        />
        <input 
        type='password'
        onInput={(e) => setPass(e.target.value)}
        placeholder='Enter Pass'
        required
        />
        <br />
        <input type="submit" style={{backgroundColor : "green" , color : "white", border : "1px solid white", borderRadius : '5px', padding : "10px"}}/>
      </form>
    </>
  )
}

export default App
