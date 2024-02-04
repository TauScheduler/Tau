import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
import Home from '../sunrise.png';


// Header component (reusable for both pages)
const Header = () => (
  <header>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <button>Login</button>
  </header>
);

// Feature component for the four features at the bottom of the homepage
const Feature = ({ icon, title, description }) => (
  <div className="feature">
    <i className={icon}></i> {/* Assuming you're using a font icon library */}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Homepage component
const Homepage = () => (
    <div>
    <nav className="nav">
      <div className="logo">Tau</div>
      <div className="buttons">
      <Link to="/Calendar">
        <button className="button">Calendar</button>
      </Link>
      <Link to="/Login">
        <button className="button">Login</button>
      </Link>
        
      </div>
    </nav>

    <header className="hero">
      <h1> Plan with Tau</h1>
      <p>Never miss a deadline, meeting or ???</p>
      <Link to="/ChatBot">
        <button className="bigger-button">Talk with Tau</button>
      </Link>

    </header>
    <div className="image-container">
      <img src={Home} width="1000" height = "400" alt="Abstract image representing organization with a dark background and a purple light ring at the center, giving a techy feel" className="rounded-lg" />
    </div>

    <div className="feature-grid">
      <div className="feature">
        <i className="fas fa-rocket"></i>
        <h2>Built for speed</h2>
        <p>Instantly sync your notes across devices</p>
      </div>
      <div className="feature">
        <i className="fas fa-project-diagram"></i>
        <h2>Networked notes</h2>
        <p>Form a graph of ideas with backlinked notes</p>
      </div>
      {/* Add similar feature elements */}
    </div>

    <footer className="footer">
      <p>© 2024 Tau. All rights reserved.</p>
    </footer>
  </div>
);

export default Homepage;
