import React from "react";
import { useSelector,useDispatch } from 'react-redux';
import { Increment,Decrement } from "./redux/counterActions.jsx";

function App () 
{
  const count = useSelector((state)=>state(count));
  
  const dispatch = useDispatch();

  return(
    <div style={{textAlign:'center',marginTop:'50px'}}>
      <h1>Example using React Redux   </h1>
      <h2>Current Count: {count}  </h2>
      <button onClick={()=>dispatch(Increment())}>Increment</button>
      <button onClick={()=>dispatch(Decrement())}>Decrement</button>
      <p>Counter Example (Increment & decrement) by dispatching action from reducer</p>
    </div>
  );
}
export default App;