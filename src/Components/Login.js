import React from 'react';
import './Login.css'; 
import TauLogo from '2024/Tau/src/TAU-2.png'; 
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="Harsheesha">
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
        <Link to="/SignUp"> Don't have an account? Sign Up</Link>
          
        </p>
      </div>
    </div>
    </div>
  );
}

export default Login;
