import { useState } from 'react'
import './App.css'
function App() {
  const [number, setNumber] = useState("")
  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  function checkInput() {
    let res = []

    // Number check
    const num = Number(number)
    if (!number) {
      res.push("No number entered")
    } else if (isNaN(num)) {
      res.push("Not a valid number")
    } else {
      res.push(num % 2 === 0 ? `${num} is Even` : `${num} is Odd`)
    }

    // String check
    if (!text) {
      res.push("String is empty")
    } else {
      const isPalindrome = text === text.split("").reverse().join("")
      res.push(isPalindrome ? `${text} is Palindrome` : `${text} is not Palindrome`)
    }

    setResult(res.join(" | "))
  }

  return (
    <div className="app-container">
      <h2>String & Number Checker</h2>

      <input
        type="text"
        value={number}
        onChange={(e) => { setNumber(e.target.value); setResult("") }}
        placeholder="Enter a Number"
      />
      <br /><br />

      <input
        type="text"
        value={text}
        onChange={(e) => { setText(e.target.value); setResult("") }}
        placeholder="Enter a String"
      />
      <br /><br />

      <button onClick={checkInput}>Check</button>

      <h3>{result}</h3>
    </div>
  )
}

export default App
