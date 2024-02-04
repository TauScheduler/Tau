import React from 'react';
import './ChatInput.css';

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message Tau..."
          className="input-field" // Add this class
        />
        <button type="submit" className="send-button">Send</button> {/* Add this class */}
      </div>
    </form>
  );
}

export default ChatInput;
