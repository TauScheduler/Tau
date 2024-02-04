import logo from './logo.svg';
import './App.css';
import Homepage from './Components/HomePage';
import MeetingsPage from './Components/MeetingsPage';

function App() {
  return (
    <div className="App">
      {/* Render Homepage component */}
      <Homepage />
      
      {/* Render MeetingsPage component */}
      <MeetingsPage />
    </div>
  );
}

export default App;
