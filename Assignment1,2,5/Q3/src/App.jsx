import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Counter using React DOM</h2>
      <h3>Counter : {count}</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          increment
        </button>
        
      </div>
    </>
  )
}

export default App
