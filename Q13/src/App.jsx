import { useState } from 'react';
import './App.css';

function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => setIsOn(!isOn)}
        className={`toggle-btn ${isOn ? 'on' : 'off'}`}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default App;
