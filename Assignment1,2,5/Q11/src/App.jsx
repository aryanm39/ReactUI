import { useState } from 'react'

function App() {
  const [number, setNumber] = useState("")
  const [string, setString] = useState("")
  const [result, setResult] = useState("")

  function checkInput(){
    let num = Number(number.toString())
    let res = ''
    
    if(!isNaN(num)){
      if(num % 2== 0)
        res += `${num} is Even and `
      else
        res += `${num} is Odd and `
    }
    else {
      res += `Not A Number and `
    }

    if(string !== ""){
     const reversed = string.split("").reverse().join("")
    if (reversed === string) {
        res += `${string} is palindrome `
      }
      else {
        res += `${string} is not palindrome `
      }
    }
    else  {
      res += `${string} is Empty `
    }

    setResult(res)
  }

  return (
    <>
      <div style={{placeItems : 'center', margin : 'auto'}}>
        <h2>String Ops</h2>
        <div>
        <input type = "text" value = {number} onChange={(e) => {setNumber(e.target.value)
          setResult("")
        }}  placeholder='Enter The Number' required/><br/><br/>
        <input type = "text" value = {string} onChange={(e) => {setString(e.target.value)
          setResult("")
        }} placeholder='Enter The String' required/> <br/><br/>
        <button onClick={checkInput}>Submit</button>
        </div>
        <h3>{result}</h3>
      </div>
      
    </>
  )
}

export default App
