import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TimePicker from 'react-time-picker';
import './Login.css';
import TauLogo from '../TAU-2.png'; 

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    studyTime: 'morning', 
    studySessionLength: '30',
    workHourStartTime: '08:00', // Default start time
    workHourEndTime: '17:00', // Default end time
  });

  const [studyTime, setStudyTime] = useState('morning');
  const [studySessionLength, setStudySessionLength] = useState(30);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTimeChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission (validation, API call, etc.)
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <nav className="nav">
      <div className="logo-container">
        <img src={TauLogo} alt="Tau Logo" />
      </div>
        <div className="buttons">
        <Link to="/">
          <button className="button">Home</button>
        </Link>
        <Link to="/Chatbot">
          <button className="button">Talk with Tau</button>
        </Link>
        <Link to="/Calendar">
          <button className="button">Calendar</button>
        </Link>
          
        </div>
      </nav>
    <div className="login-body Harsheesha">
      <div className="signup-container form-container">
        {/* <form onSubmit={handleSubmit} className="signup-form">
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

        </form> */}
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Sign Up</h2>
          <p>Enter your details below to create your account and get started.</p>

          <div className="input-group">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
          </div>

          <div className="time-input-group">
            <div className="time-input-container">
              <label htmlFor="workHourStartTime" className="form-label">Work Hours Start Time:</label>
              <input 
                type="time" 
                id="workHourStartTime"
                name="workHourStartTime"
                onChange={(e) => handleTimeChange('workHourStartTime', e.target.value)}
                value={formData.workHourStartTime}
                required
              />
            </div>
            <div className="time-input-container">
              <label htmlFor="workHourEndTime" className="form-label">Work Hours End Time:</label>
              <input 
                type="time"
                id="workHourEndTime"
                name="workHourEndTime"
                onChange={(e) => handleTimeChange('workHourEndTime', e.target.value)}
                value={formData.workHourEndTime}
                required
              />
            </div>
          </div>

          <div className = "preference-group">
            <div className="dropdown-group">
              <label htmlFor="studyTime" className="form-label">Study Time Preference:</label>
              <select 
                name="studyTime" 
                id="studyTime"
                value={formData.studyTime} 
                onChange={handleChange} 
                required
                className="form-select"
              >
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>

            <div className="dropdown-group">
              <label htmlFor="studySessionLength" className="form-label">Study Session Length:</label>
              <select 
                name="studySessionLength" 
                id="studySessionLength"
                value={formData.studySessionLength} 
                onChange={handleChange} 
                required
                className="form-select"
              >
                <option value="15">15 min</option>
                <option value="30">30 min</option>
                <option value="45">45 min</option>
                <option value="60">1 hour</option>
                <option value="90">90 min</option>
                <option value="120">2 hours</option>
              </select>
            </div>
          </div>

          

          <button type="submit">Confirm</button>
          <button type="button">Cancel</button>
          <a href="/Login">Already have an account? Login here.</a>
        </form>
      </div>

      <footer className="footer">
        <p>© 2024 Tau. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default SignUp;

