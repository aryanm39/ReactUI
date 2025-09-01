import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const results = {
    Uppercase: input.toUpperCase(),
    Lowercase: input.toLowerCase(),
    Length: input.length,
    Reverse: input.split('').reverse().join(''),
  };

  return (
    <div className="App">
      <h1>String Operations</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your string here"
      />
      <br />
      <div className="result">
        <h3>Results:</h3>
        <ul>
          {Object.entries(results).map(([label, value]) => (
            <li key={label}>
              {label}: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

