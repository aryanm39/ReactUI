import { useEffect } from "react";
import { useState } from "react"

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) 
    return false
  if (!regex.test(email)) 
    return false
  
  return true;
}

function isValidPassword(password) {
  if (!password) 
    return false
  if (password.length < 6) 
    return false
  
  return true
}


export default function useInputValidation(initialState, inputType)
{
    const [isValid, setIsValid] = useState(false)
    const [input, setInput] = useState(initialState)

    useEffect(()=> {
        if(inputType === "email")
            setIsValid(isValidEmail(input))
        
        if(inputType === "password")
            setIsValid(isValidPassword(input))

        console.log(input + " Is " + isValid)
    }, [input, setInput])
    

    return [input, setInput, isValid]
}