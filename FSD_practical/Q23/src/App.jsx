import { useState } from 'react';
import './App.css';

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div className="App">
      <button
        onClick={toggleButton}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          backgroundColor: isOn ? 'green' : 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default App;
