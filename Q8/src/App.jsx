import { useState } from 'react'
import useInputValidation from '../Hooks/useInputValidation'
import './App.css'

function App() {
  
  const [email, setEmail, isValidEmail] = useInputValidation("", "email")
  const [pass, setPass, isValidPass] = useInputValidation("", "password")
  const [res, setRes] = useState("")

  return (
    <>
      <h2>Login Form</h2><br />
      <form onSubmit={(e) => {
        e.preventDefault()
        if(!isValidEmail){
          setRes(prev => prev + "Email is not valid, ")
        }
        if(!isValidPass){
          setRes(prev => prev + "Password is not valid")
        }        

        if(isValidEmail && isValidPass)
          setRes("Both Valid")
      }}>
        <input 
        type='text' 
        placeholder='Enter Email'  
        value={email} 
        onChange={(e) => {
          setEmail(e.target.value)
          setRes("")
        }} 
        required/>
        
        <input 
        type='password' 
        placeholder='Enter Password'  
        value={pass} 
        onChange={(e) => {
          setPass(e.target.value)
          setRes("")
        }} 
        required/><br />

        <input type='submit' value={"login"}/>
      </form>
      <h4>{res}</h4>
    </>
  )
}

export default App
