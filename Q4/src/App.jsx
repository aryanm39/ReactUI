import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card title={"title 1"} description={"description 1"}/>
    <Card title={"title 2"} description={"description 2"}/>
    
    </>
  )
}

export default App
