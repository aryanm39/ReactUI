import { useState } from 'react'
import ThemeContext from './Context/ThemeContext'
import './App.css'
import MyContainer from './Components/MyContainer'

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <>
      <ThemeContext.Provider value = {{theme, setTheme}}>
        <MyContainer />
      </ThemeContext.Provider>
    </>
  )
}

export default App
