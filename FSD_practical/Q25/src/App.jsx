import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleUppercase = () => {
    setResult(input.toUpperCase());
  };

  const handleLowercase = () => {
    setResult(input.toLowerCase());
  };

  const handleLength = () => {
    setResult(`Length: ${input.length}`);
  };

  const handleReverse = () => {
    setResult(input.split('').reverse().join(''));
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>String Operations App</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter your string here"
      />
      <div className="buttons">
        <button onClick={handleUppercase}>Uppercase</button>
        <button onClick={handleLowercase}>Lowercase</button>
        <button onClick={handleLength}>Length</button>
        <button onClick={handleReverse}>Reverse</button>
      </div>
      <div className="result">
        <h3>Result:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
