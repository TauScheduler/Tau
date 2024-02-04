import React, { useState } from 'react';
import './ChatBot.css'; 
import { Link } from 'react-router-dom';

function ChatBot() {
  const [userMessages, setUserMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    const userMessage = { type: 'user', text: newMessage };
    setUserMessages([...userMessages, userMessage]);

    // Handle your logic for sending the message to a server or performing other actions

    setTimeout(() => {
      const botMessage = { type: 'bot', text: 'I am a chatbot, and I received your message!' };
      setUserMessages([...userMessages, botMessage]);
      setNewMessage('');
    }, 500);
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
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
