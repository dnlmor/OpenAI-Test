import React, { useState } from 'react';
import { sendMessage, saveConversation } from '../../services/openai';

const Chatbot = ({ language, section, userId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = input;
      setMessages((prev) => [...prev, { sender: 'User', content: userMessage }]);
      setInput('');
      setLoading(true);

      try {
        const botResponse = await sendMessage(userMessage, language, section);
        setMessages((prev) => [...prev, { sender: 'AI', content: botResponse }]);
      } catch (error) {
        console.error(error);
        setMessages((prev) => [
          ...prev,
          { sender: 'AI', content: 'Sorry, I could not process your request.' }
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSaveConversation = async () => {
    const conversationData = {
      userId: userId,
      messages: messages,
      testType: language,
      section: section
    };
    await saveConversation(conversationData);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <h2 className="text-xl font-semibold">Chatbot ({language} - {section})</h2>
      <div className="h-64 overflow-y-auto border border-gray-300 p-2 mb-2">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 flex ${msg.sender === 'User' ? 'justify-end' : 'justify-start'}`}>
            <div className={`bg-${msg.sender === 'User' ? 'blue' : 'green'}-600 text-white rounded-lg p-2`}>
              <strong>{msg.sender}:</strong> {msg.content}
            </div>
          </div>
        ))}
        {loading && <div className="text-gray-400">AI is typing...</div>}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
          className="flex-grow border rounded-lg p-2"
        />
        <button onClick={handleSend} className="bg-blue-600 text-white py-2 px-4 rounded-lg ml-2">Send</button>
      </div>
      <button onClick={handleSaveConversation} className="bg-green-600 text-white py-2 px-4 rounded-lg mt-2">Save Conversation</button>
    </div>
  );
};

export default Chatbot;
