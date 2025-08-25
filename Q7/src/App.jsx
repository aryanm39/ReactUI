import { useReducer, useState } from 'react';
import './App.css'

function App() {

  const [task, setTask] = useState("")

  function reducer(state, action)
  {
    switch (action.type) {
      case "add":
        return {toDos : [...state.toDos, action.newTask]}
      case "del":
        return {toDos : state.toDos.filter(item => item !== action.taskToRemove)}
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {toDos : []})


  return (
    <>
        <h2>To Do</h2>
        <input type='text' placeholder='Enter The Task' required style={{height : ""}} value={task} onChange={(e) => setTask(e.target.value)}/>
        <button style={{backgroundColor : "green", color : 'white'}} onClick={()=> {
                    dispatch({type : "add", newTask : task})
                    setTask("")
                    }}>Add</button>
        
        <ul type = 'None'>
          {state.toDos.map((t) => <li style={{fontSize : '18px'}} key={t}>{t}<button onClick={()=> {
                    dispatch({type : "del", taskToRemove : t})
                    }} 
          style={{marginLeft : "30px", backgroundColor : 'red'}}>Del</button></li>)}
        </ul>

    </>
  )
}

export default App
