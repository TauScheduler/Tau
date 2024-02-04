import React from 'react';
import './Message.css';

function Message({ text, isUserMessage }) {
  return (
    <div className={`message ${isUserMessage ? 'user-message' : 'bot-message'}`}>
      {text}
    </div>
  );
}

export default Message;
