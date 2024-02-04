import React, { useEffect, useRef, useState } from 'react';
import './Chatbot.css'; 
import ChatInput from './ChatInput';
import Message from './Message';

function ChatBot() {
  const [messages, setMessages] = React.useState([]);
  const messagesEndRef = useRef(null); // Add this line

  useEffect(() => {
    // Scroll to the bottom of the message area when messages change
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, isUserMessage: true }]);
    }

    // Here you would implement the logic to get a response from your chatbot

    // Simulate a delay for the bot response
    setTimeout(() => {
      // This is where you could integrate a real chatbot API if desired
      const botMessage = "Message Received! :)";
      setMessages((prevMessages) => [...prevMessages, { text: botMessage, isUserMessage: false }]);
    }, 2000); // 2000ms delay
    
  };

  return (
    <div className="Chat">
      <div className="message-area">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} isUserMessage={message.isUserMessage} />
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatBot;
