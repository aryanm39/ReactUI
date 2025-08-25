import "./App.css";
import React, { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [str, setStr] = useState("");
  const [result, setResult] = useState("");

  // Function to check if string is palindrome
  function isPalindrome(s) {
    let rev = s.split("").reverse().join("");
    return s === rev;
  }

  // Function to check if number is Armstrong
  function isArmstrong(n) {
    let digits = n.split("").map(Number);
    let power = digits.length;
    let sum = 0;
    for (let d of digits) {
      sum += d ** power;
    }
    return sum === parseInt(n);
  }

  // When button clicked
  function handleCheck() {
    let msg = "";
    if (str) {
      msg += `String "${str}" is ${isPalindrome(str) ? "" : "not "}a Palindrome.\n`;
    }
    if (num) {
      msg += `Number ${num} is ${isArmstrong(num) ? "" : "not "}an Armstrong Number.`;
    }
    setResult(msg);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Palindrome & Armstrong Checker</h2>
      <input
        type="text"
        placeholder="Enter a string"
        value={str}
        onChange={(e) => setStr(e.target.value)}
      />
      <br /><br />
      <input
        type="text"
        placeholder="Enter a number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <br /><br />
      <button onClick={handleCheck}>Check</button>
      <pre style={{ marginTop: "20px", fontSize: "16px" }}>{result}</pre>
    </div>
  );
}

export default App;