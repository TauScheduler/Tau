import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import ChatBot from './Components/Chatbot';
import Calendar from './Components/Calendar'
import MeetingsPage from './Components/MeetingsPage';


function App() {
  return (
  
  <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <button><Link to="/">Home</Link></button>
            </li>
            <li>
              <button><Link to="/ChatBot">Chatbot</Link></button>
            </li>
            <li>
              <button><Link to="/Calendar">Calendar</Link></button>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes> {/* Wrap your routes in a <Routes> component */}
          <Route path="/" element={<HomePage />} />
          <Route path="/ChatBot" element={<ChatBot />} />
          <Route path="/Calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
