import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import ChatBot from './Components/Chatbot';
import Calendar from './Components/Calendar';
import Login from './Components/Login';
import MeetingsPage from './Components/MeetingsPage';
import SignUp from './Components/SignUp';


function App() {
  return (
  
  <Router>
      <div className="App">
        <Routes> {/* Wrap your routes in a <Routes> component */}
          <Route path="/" element={<HomePage />} />
          <Route path="/ChatBot" element={<ChatBot />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
