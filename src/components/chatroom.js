import React, { useState, useEffect } from 'react';

const ChatRoom = ({ roomName }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch chat messages and set up WebSocket connection to receive new messages
  }, [roomName]);

  const sendMessage = () => {
    // Send the message to the server using WebSocket
  };

  return (
    <div>
      <h1>{roomName} Chat</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
