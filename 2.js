// === Chapter 2. Hooks Overview ===//

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

//  1. useCallback Hook

import React, { useCallback, useState } from 'react';
const CounterApp = () => {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(() => setCount(cnt => cnt + 1), []);
  const decrement = useCallback(() => setCount(cnt => cnt - 1), []);
   
//   const addLineCount = useCallback(() => {
//     // function logic
//   }, []);
  
//   const addDecCount = useCallback(() => {
//     // function logic  
//   }, []);

  return (
    <div>
      <h2>Use Callback Hook ex: </h2>
      <button onClick={() => increment()}> ++ </button>
      <button onClick={() => decrement()}> -- </button>
    </div>
  );
};

//  2. useMemo Hook

import React, { useState, useMemo } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);
  
  const memoizedCount = useMemo(() => {
    console.log("Calculating memoized count");
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      <p>Memoized Count = {memoizedCount}</p>
      <p>Another Count: {anotherCount + 1}</p>
      <button onClick={() => setAnotherCount(1 + anotherCount)}>
        Increment AnotherCount
      </button>
    </div>
  );
}
export default Counter;

//  3. useRef Hook

import { useRef, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("Component has rendered", renderCount.current + " time");
  });
}