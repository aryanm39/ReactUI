import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [numbers, setNumbers] = useState([]);

  // Function to add number to array
  const addNumber = () => {
    if (input !== "" && !isNaN(input)) {
      const newNumbers = [...numbers, Number(input)];
      setNumbers(newNumbers);
      setInput("");
    }
  };

  // Get sorted numbers
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Number Sorter</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter number"
      />
      <button onClick={addNumber}>Add</button>
      <h3>Original Array:</h3>
      <p>{numbers.join(", ")}</p>
      <h3>Sorted Array (Ascending):</h3>
      <p>{sortedNumbers.join(", ")}</p>
    </div>
  );
}

export default App;