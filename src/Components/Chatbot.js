import React, { useState } from 'react';
import './Chatbot.css'; 
import { Link } from 'react-router-dom';

function ChatBot() {
  const [userMessages, setUserMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const userMessage = { type: 'user', text: newMessage };
      setUserMessages([...userMessages, userMessage]);
      setNewMessage('');
    }

    // Handle your logic for sending the message to a server or performing other actions

    // setTimeout(() => {
    //   const botMessage = { type: 'bot', text: 'I am a chatbot, and I received your message!' };
    //   setUserMessages([...userMessages, botMessage]);
    //   setNewMessage('');
    // }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="chat-header">
          <button className="calendar-button">Calendar</button>
        </div>
        <div className="chat-messages">
          {userMessages.map((message, index) => (
            <div key={index} className={message.type}>
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <div className="chat-input">
        <div className="input-container">
          <input
            type="text"
            placeholder="Message Tau..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
