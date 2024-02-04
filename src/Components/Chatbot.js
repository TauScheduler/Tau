import React, { useEffect, useRef, useState } from 'react';
import TauLogo from '../TAU-2.png'; 
import './Chatbot.css'; 
import { Link } from 'react-router-dom';
import ChatInput from './ChatInput';
import Message from './Message';

function ChatBot() {
  const [messages, setMessages] = React.useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // Send a bot message when the component mounts
      const botMessage = "Hi, I'm Tau! I'm an AI-powered scheduling assistant. Text me about a task or upcoming event and I'll take care of scheduling it for you.";
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
    }
  
    // Check if the user's message is "thanks"
    if (newMessage.trim().toLowerCase() === 'thanks' || newMessage.trim().toLowerCase() === 'thank you') {
      setTimeout(() => {
        // This is where you could integrate a real chatbot API if desired
        const botResponse = "You're welcome! Happy to help :)";
        setMessages((prevMessages) => [...prevMessages, { text: botResponse, isUserMessage: false }]);
      }, 3000);
    } else {
      // Implement the logic to get a response from your chatbot for other inputs
      // Simulate a delay for the bot response
      setTimeout(() => {
        // This is where you could integrate a real chatbot API if desired
        const botResponse = "Task Created! Check your calendar to see all of your tasks. :)";
        setMessages((prevMessages) => [...prevMessages, { text: botResponse, isUserMessage: false }]);
      }, 2000); // 2s delay
    }
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
