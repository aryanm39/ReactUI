// Example 3: Complete Form Example
// Example of all Form elements in One

function SimpleForm() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [focus, setFocus] = useState(false);
  
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  
  const handleFocus = () => {
    setFocus(true);
  };
  
  const handleBlur = () => {
    setFocus(false);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter name:</label>
        <input 
          type="text" 
          value={name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          style={{
            backgroundColor: focus ? "#eaf7fa" : ""
          }}
        />
        <button type="submit">Submit</button>
        {submitted && <p>Form Submitted with name: {name}</p>}
      </form>
    </div>
  );
}

export default SimpleForm;
export { FocusExample, ResetExample };



//
// ===== REUSABLE COMPONENT EXAMPLE =====

// Header component
import React from 'react';
import ReactDOM from 'react-dom';
import './App';
import './style.css';

ReactDOM.render(<App/>, document.getElementById('root'));

// App.js
import Header from 'component/header';
import Footer from 'component/footer';

function App() {
  return (
    <div>
      <Header/>
      <h1>Welcome to React Application</h1>
      <Footer/>
    </div>
  );
}

export default App;

// Header component
function header() {
  return <footer><p>©Website footer 2023</p></footer>
}

export default footer;


//
// ===== FUNCTIONAL COMPONENT WITH HOOKS =====

import React, { useEffect } from 'react';

function myComponent() {
  // componentDidMount equivalent
  useEffect(() => {
    console.log("Component mounted");
  }, []); // runs once after initial render
  
  // componentDidUpdate equivalent  
  useEffect(() => {
    console.log("Component updated");
  }); // runs after every render
  
  return (
    <div>
      <p>Functional Component</p>
    </div>
  );
}

// ===== REACT HOOKS =====

// 1. useState Hook
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;

// ===== useEffect Hook =====

import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  // Similar to componentDidMount & componentDidUpdate
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    // Update browser title using browser API
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
    );
  });
}
