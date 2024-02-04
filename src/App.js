import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './Components/HomePage';
import ChatBot from './Components/Chatbot';
import MeetingsPage from './Components/MeetingsPage';


function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/chat" component={ChatBot} />

    </Switch>
     

  </Router>
  );
}

export default App;
