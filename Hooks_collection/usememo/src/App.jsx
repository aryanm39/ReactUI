// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
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
