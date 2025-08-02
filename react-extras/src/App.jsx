import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [number, setNumber] = useState('');
  const [sumOfDigits, setSumOfDigits] = useState(0);

  const calculateSum = (num) => { //(number)
    if (!num) {
      setSumOfDigits(0);
      return;
    }
    
    const numString = String(num); //number
    let sum = 0;
    for (let digit of numString) {
      sum = sum + Number(digit); //numString()
    }
    setSumOfDigits(sum);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    calculateSum(value);
  };

  return (
    <div>
      <h1>Sum of Digits</h1>
      <div>
        <label>Enter a Number:</label>
        <input
          type="number"
          id="numInput"
          value={number}
          onChange={handleChange}
          placeholder="Enter a number e.g. 91234"
        />
      </div>
      {number && (
        <p>
          The sum of digits of <span>{number}</span> is: 
          <span>{sumOfDigits}</span>
        </p>
      )}
    </div>
  );
}

export default App