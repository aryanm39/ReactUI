import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter : {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          decrement
        </button>
       
      </div>
    </>
  )
}

export default App
