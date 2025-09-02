import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [digitSum, setDigitSum] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (/^-?\d+$/.test(value)) {
      setIsValid(true);
      let sum = 0;
      let num = Math.abs(Number(value)); 
      while (num > 0) {
        let rem = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
      }
      setDigitSum(sum);
    } else {
      setIsValid(false);
      setDigitSum(null);
    }
  };

  return (
    <div className="App">
      <h2>Number Validator & Digit Sum Calculator</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      {isValid === true && (
        <div style={{ marginTop: '10px', color: 'green' }}>
         Valid number. Sum of digits: <strong>{digitSum}</strong>
        </div>
      )}
      {isValid === false && (
        <div style={{ marginTop: '10px', color: 'red' }}>
         Invalid input. Please enter a valid integer.
        </div>
      )}
    </div>
  );
}

export default App;
