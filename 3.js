// 6. Event Handling in React

// Example 1: Basic Event Handler
import React from "react";

function App() {
  function onHandle() {
    alert("Button was clicked");
  }

  return (
    <button onClick={onHandle}>Click</button>
  );
}

export default App;


//Example 2: Event Handler with Parameters
import React from "react";

function MyComponent() {
  function handleButtonClick(id, event) {
    console.log(`Clicked button with Id: ${id}`, event);
  }

  return (
    <button onClick={(event) => handleButtonClick('button123', event)}>
      Click
    </button>
  );
}

// Example: Click Event with Event Information
import React from "react";

function clickExample() {
  const handleClick = (event) => {
    console.log("Button is clicked!");
    console.log("Event type is:", event.type);
    console.log("Is default prevented?", event.defaultPrevented);
  };

  return (
    <div>
      <h2>React Synthetic Event:</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default clickExample;

// 7. Form Events

// Example: onChange() & onSubmit()
import React, { useState } from 'react';

function FormSubmitExample() {
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page Reloading/Re-rendering
    alert(`Form is Submitted with name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name" 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

//  onInput() Event
// Example: onInput()
import React, { useState } from 'react';

function MyForm() {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form>
        <label>Type Something:</label>
        <input 
          type="text" 
          value={inputValue}
          onInput={handleInputChange} 
          placeholder="Enter your name" 
        />
        <p>You entered value is: {inputValue}</p>
      </form>
    </div>
  );
}

export default MyForm;

// Example 1: Focus Example
import React, { useState } from 'react';
function FocusExample() {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleFocus = () => {
    setIsFocused(true);
  };
  
  const handleBlur = () => {
    setIsFocused(false);
  };
  
  return (
    <div>
      <input 
        type="text" 
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          borderColor: isFocused ? "blue" : "red"
        }}
      />
      {isFocused && <p>Input is focused</p>}
    </div>
  );
}

// Example 2: Reset Example

function ResetExample() {
  const [text, setText] = useState('');
  
  const handleReset = () => {
    console.log("Form has been Reset");
    setText('');
  };
  
  return (
    <form onReset={handleReset}>
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="reset">Reset</button>
    </form>
  );
}

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