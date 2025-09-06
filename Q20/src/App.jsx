import React from "react";
import { useSelector,useDispatch } from 'react-redux';
import { Increment,Decrement } from "./redux/counterActions.jsx";
import './App.css'

function App () 
{
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return(
    <div>
      <h1> React Redux </h1>
      <h2>Current Count: {count} </h2>
      <button onClick={()=>dispatch(Increment())}>Increment</button>
      <button onClick={()=>dispatch(Decrement())}>Decrement</button>
      <p>Counter Example (Increment & decrement) by dispatching action from reducer</p>
    </div>
  );
}
export default App;