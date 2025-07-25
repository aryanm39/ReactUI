// ===== FUNCTIONAL COMPONENTS =====

// Basic functional component syntax
function functionName(argument-name) {
  // function body
}

function functionName = () => {
  // function body
}

// ===== CLASS COMPONENTS =====

// Class component syntax
class className extends React.Component {
  render() {
    return <h1>Hello User</h1>
  }
}

// ===== REACT APP STRUCTURE =====

// App.js example
const name = "user123";
const element = <h1>Hello, {name}!</h1>;
ReactDOM.render(element, document.getElementById('root'));

// ===== JSX FOR UI ELEMENTS =====

// Greeting component with props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>
}

ReactDOM.render(<Greeting name="user123"/>, 
  document.getElementById('root'));

// ===== CREATING LISTS WITH JSX =====

// Example with courses array
const courses = ['BCA', 'BSc', 'MSc', 'MCA'];
const listItems = courses.map((courses) =>
  <li key={courses}>{courses}</li>
);

ReactDOM.render(<ul>{listItems}</ul>,
  document.getElementById('root'));

// ===== COMPONENT LIFECYCLE (CLASS COMPONENTS) =====

class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component is mounted");
  }
  
  componentDidUpdate() {
    console.log("Component is Updated");
  }
  
  componentWillUnmount() {
    console.log("Component is unmounted/removed from DOM");
  }
  
  render() {
    return <div></div>
  }
}

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

// ===== useReducer Hook =====

import React, { useReducer } from 'react';

const CounterReducer = (state, action) => {
  switch (action.type) {
    case 'Increment': 
      return { state: count + 1 };
    case 'Decrement': 
      return { state: count - 1 };
    default:
      return state;
  }
};

function counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({type: "Increment"})}>++</button>
      <button onClick={() => dispatch({type: "Decrement"})}>--</button>
    </div>
  );
}