import React from 'react';
import './Login.css'; 
import TauLogo from '../sunrise.png'; 

function Login() {
  return (
    <div className="login-container">
      <div className="logo-container">
        <h1>Tau</h1>
        <img src={TauLogo} alt="Tau Logo" />
      </div>
      <div className="form-container">
        <h2>Login</h2>
        <form>
          {/* Input fields for email and password */}
          <label>Email:</label>
          <input type="email" name="email" />

          <label>Password:</label>
          <input type="password" name="password" />

          <button type="submit">Login</button>
        </form>

        <p className="register-link">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
