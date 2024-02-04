import React, { useEffect, useRef, useState } from 'react';
import './Chatbot.css'; 
import ChatInput from './ChatInput';
import Message from './Message';

function ChatBot() {
  const [messages, setMessages] = React.useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // Send a bot message when the component mounts
      const botMessage = "Howdy, I'm Tau! How can I assist you?";
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
