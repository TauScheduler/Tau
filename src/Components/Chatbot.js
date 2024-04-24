import React, { useEffect, useRef, useState } from 'react';
import TauLogo from '../TAU-2.png'; 
import './Chatbot.css'; 
import { Link } from 'react-router-dom';
import ChatInput from './ChatInput';
import Message from './Message';

function ChatBot() {
  const [messages, setMessages] = React.useState([]);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // Send a bot message when the component mounts
      const botMessage = "Howdy I'm Tau! How can I assist you?";
      setMessages([{ text: botMessage, isUserMessage: false }]);
    }, 1000);
    
  }, []); // Empty dependency array to ensure it runs only once on mount

  useEffect(() => {
    // Scroll to the bottom of the message area when messages change
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, isUserMessage: true }]);
      setUserMessageCount(userMessageCount + 1);
    }

    setTimeout(() => {
      let botResponse = '';
      if (userMessageCount === 0) {
        botResponse = "Sure! Would you also like me to schedule 15 minute breaks every 2 hours? Taking breaks is good for productivity!";
      } else if (userMessageCount == 1) {
        botResponse = "Great! Your work time has been scheduled along with 15 minute breaks!"
      } else if (userMessageCount === 2) {
        botResponse = "Looks like we're in a bit of a time crunch! You won't have enough time to complete your Math 207 homework before the deadline at 11:59 PM tomorrow. Would you like to extend your work hours?";
      } else if (userMessageCount == 3) {
        botResponse = "Sure thing! Your work hours have been extended until 8 PM! "
      } else {
        // Default response for other messages
        botResponse = "Task Created! Check your calendar to see all of your tasks. :)";
      }
      setMessages(prevMessages => [...prevMessages, { text: botResponse, isUserMessage: false }]);
    }, 2000);
    // Check if the user's message is "thanks"
    
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
          <Link to="/Calendar">
            <button className="button">Calendar</button>
          </Link>
          <Link to="/Login">
            <button className="button">Login</button>
          </Link>
        </div>
      </nav>
      <div className="Chat">
        <div className="message-area">
          {messages.map((message, index) => (
            <Message key={index} text={message.text} isUserMessage={message.isUserMessage} />
          ))}
          <div ref={messagesEndRef}></div>
        </div>
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default ChatBot;
