import React, { useState } from 'react';
import { sendMessage } from '../services/openai';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, newMessage]);

    // Send the message to the backend and get the response
    const response = await sendMessage(input);
    setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
    setInput('');
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-4 h-full">
      <div className="chat-window flex-grow overflow-auto mb-4 p-2 border border-gray-300 rounded-lg">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border border-gray-300 rounded-l-lg"
        />
        <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded-r-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
