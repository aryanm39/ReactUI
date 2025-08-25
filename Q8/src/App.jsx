import { useState } from 'react';
import './App.css';

const App = () => {
  // Form state
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  // Error state
  const [errors, setErrors] = useState({});
  
  // Validation functions
  const validateEmail = (email) => {
    if (!email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email';
    return '';
  };
  
  const validatePassword = (password) => {
    if (!password.trim()) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return '';
  };
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Handle form submission
  const handleSubmit = () => {
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    
    const newErrors = {
      email: emailError,
      password: passwordError
    };
    
    setErrors(newErrors);
    
    // Check if form is valid
    if (!emailError && !passwordError) {
      alert('Form submitted successfully!\n\nData:\n' + JSON.stringify(formData, null, 2));
      handleReset();
    }
  };
  
  // Reset form
  const handleReset = () => {
    setFormData({
      email: '',
      password: ''
    });
    setErrors({});
  };

  return (
    <div className="app">
      <div className="form-container">
        <h1 className="form-title">Simple Form Validation</h1>
        
        <div className="form-fields">
          {/* Email Field */}
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`input ${errors.email ? 'error' : ''}`}
            />
            {errors.email && <div className="error-text">{errors.email}</div>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`input ${errors.password ? 'error' : ''}`}
            />
            {errors.password && <div className="error-text">{errors.password}</div>}
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button onClick={handleSubmit} className="btn btn-submit">
              Submit
            </button>
            <button onClick={handleReset} className="btn btn-reset">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
