import { useState } from 'react'
import './App.css'

function SimpleForm() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Enter Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <button type="submit">Submit</button>
        {submitted && <p>Form submitted with name {name}</p>}
      </form>
    </div>
  )
}

export default SimpleForm;
