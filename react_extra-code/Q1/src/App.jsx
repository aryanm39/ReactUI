import "./App.css";
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      console.log(formData);
    }
  };
  
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br />
          <input 
            type="text" 
            name="username" 
            value={formData.username}
            onChange={handleChange} 
          />
          <div style={{ color: 'red' }}>{errors.username}</div>
        </div>
        
        <div>
          <label>Email:</label><br />
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange} 
          />
          <div style={{ color: 'red' }}>{errors.email}</div>
        </div>
        
        <div>
          <label>Mobile Number:</label><br />
          <input 
            type="text" 
            name="mobile" 
            value={formData.mobile}
            onChange={handleChange} 
          />
          <div style={{ color: 'red' }}>{errors.mobile}</div>
        </div>
        
        <div>
          <label>Password:</label><br />
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange} 
          />
          <div style={{ color: 'red' }}>{errors.password}</div>
        </div>
        
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;



//Simple Version (Basic Validation)


// import React, { useState } from 'react';

// function App() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!username || !email || !mobile || !password) {
//       setMessage('Please fill all fields');
//       return;
//     }
    
//     if (!email.includes('@')) {
//       setMessage('Invalid email format');
//       return;
//     }
    
//     if (mobile.length !== 10) {
//       setMessage('Mobile number must be 10 digits');
//       return;
//     }
    
//     if (password.length < 6) {
//       setMessage('Password must be at least 6 characters');
//       return;
//     }
    
//     setMessage('Form submitted successfully!');
//   };
  
//   return (
//     <div style={{ padding: 20 }}>
//       <h3>User Form</h3>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div><br />
        
//         <div>
//           <input
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div><br />
        
//         <div>
//           <input
//             type="text"
//             placeholder="Mobile Number"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//           />
//         </div><br />
        
//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div><br />
        
//         <button type="submit">Submit</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default App;