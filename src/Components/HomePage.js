import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
import Home from '../sunrise.png';
//import Info from './Info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTasks, faBookReader, faHourglassHalf, faSyncAlt } from '@fortawesome/free-solid-svg-icons';



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
  <div className="text-center">
    <div className="mb-4">
      <FontAwesomeIcon icon={icon} size="3x" />
    </div>
    <h3 className="text-xl mb-2">{title}</h3>
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
    <Feature
          icon={faCalendarAlt}
          title="Automated Calendar Entries"
          description="with Google Calendar Integration"
        />
      <Feature
          icon={faTasks}
          title="Schedule Tasks"
          description="from your text messages"
        />
      {/* Add similar feature elements */}
    </div>

    <div className="feature-grid">
      {/* ... (existing feature elements) */}
      {/* Add the App component here */}

    </div>

    <footer className="footer">
      <p>© 2024 Tau. All rights reserved.</p>
    </footer>
  </div>
);

export default Homepage;
