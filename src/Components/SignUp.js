import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import TauLogo from '../TAU-2.png'; 

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [studyTime, setStudyTime] = useState('morning');
  const [studySessionLength, setStudySessionLength] = useState(30);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission (validation, API call, etc.)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-body Harsheesha">
      <div className="login-container form-container">
        <div className="logo-container">
          <img src={TauLogo} alt="Tau Logo" />
        </div>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Create an Account</h2>
          <label>Name:  </label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          
          <label> Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label> Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <h2>User Preferences</h2>
          <div className="preferences-item">
          <label className="preferences-label">
            Preferred Study Time:
            <select
              className="preferences-select"
              value={studyTime}
              onChange={(e) => setStudyTime(e.target.value)}
            >
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </label>
        </div>

        <div className="preferences-item">
          <label className="preferences-label">
            Preferred Study Session Lengths:
            <input
              type="range"
              className="preferences-range"
              min="15"
              max="180"
              step="10"
              value={studySessionLength}
              onChange={(e) => setStudySessionLength(Number(e.target.value))}
            />
            <span>{studySessionLength} minutes</span>
          </label>
        </div>

          <button type="submit">Sign Up</button>

        </form>

        <Link to="/Login">Already have an account? Login here.</Link>
      </div>

      <footer className="footer">
        <p>© 2024 Tau. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignUp;

