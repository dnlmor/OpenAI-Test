import React, { useEffect, useState } from 'react';
import { sendMessage } from '../../services/openai';
import { saveConversation as saveConversationAPI } from '../../services/conversation';

const Chatbot = ({ language, section, activeConversation }) => {
  const [messages, setMessages] = useState(activeConversation?.messages || []);
  const [input, setInput] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [savingError, setSavingError] = useState('');

  // Load messages
  useEffect(() => {
    if (activeConversation) {
      setMessages(activeConversation.messages);
    }
  }, [activeConversation]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: 'user', content: input, timestamp: new Date() };
    setMessages([...messages, newMessage]);
    setInput('');

    try {
      const botResponse = await sendMessage(input, language, section);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'assistant', content: botResponse, timestamp: new Date() }
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleSaveConversation = async () => {
    setIsSaving(true);
    setSavingError('');

    try {
      const conversationData = {
        messages,
        name: `Conversation on ${new Date().toLocaleString()}`,
        language,
        section,
      };

      await saveConversationAPI(conversationData);
      alert('Conversation saved successfully!');
    } catch (error) {
      console.error('Error saving conversation:', error);
      setSavingError('Failed to save conversation. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Conversation in {section} ({language})</h3>

      {savingError && (
        <div className="p-2 bg-red-100 text-red-800 rounded mb-4">
          {savingError}
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 rounded shadow-inner space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs p-3 rounded-lg shadow ${message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'}`}>
              <p className="text-sm">{message.content}</p>
              <p className="text-xs text-gray-300">{new Date(message.timestamp).toLocaleTimeString()}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-3 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-3 bg-blue-600 text-white rounded-lg"
        >
          Send
        </button>
      </div>

      <button
        onClick={handleSaveConversation}
        className={`mt-4 p-3 ${isSaving ? 'bg-gray-400' : 'bg-green-600'} text-white rounded-lg`}
        disabled={isSaving}
      >
        {isSaving ? 'Saving...' : 'Save Conversation'}
      </button>
    </div>
  );
};

export default Chatbot;
