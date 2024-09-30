import React, { useEffect, useState } from 'react';
import { sendMessageToAI } from '../../../api/chatApi';
import { saveConversation as saveConversationAPI } from '../../../api/conversationApi';
import SaveConversationModal from './SaveConversationModal';
import { useLanguage } from '../../../context/LanguageContext';

const Chatbot = ({ section, activeConversation, userId }) => {
  const { selectedLanguage } = useLanguage();
  const [messages, setMessages] = useState(activeConversation ? activeConversation.messages : []);
  const [input, setInput] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [savingError, setSavingError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [conversationTitle, setConversationTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!selectedLanguage) return;

    setMessages([]);
    const greetUser = async () => {
      setIsLoading(true);
      const greetingMessage = await sendMessageToAI({
        message: 'greet',
        language: selectedLanguage,
        section,
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'assistant', content: greetingMessage, timestamp: new Date() },
      ]);
      setIsLoading(false);
    };
    greetUser();
  }, [selectedLanguage, section]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: 'user', content: input, timestamp: new Date() };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');

    setIsLoading(true);

    try {
      const botResponse = await sendMessageToAI({
        message: input,
        language: selectedLanguage,
        section,
      });
      const assistantMessage = { role: 'assistant', content: botResponse, timestamp: new Date() };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error.message);
      const errorMessage = `Error: Unable to process your message. Please try again.`;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'assistant', content: errorMessage, timestamp: new Date() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveConversation = async () => {
    if (!conversationTitle.trim()) {
      setSavingError('Conversation title is required.');
      return;
    }

    if (messages.length === 0) {
      setSavingError('Cannot save an empty conversation.');
      return;
    }

    setIsSaving(true);
    setSavingError('');

    try {
      const conversationData = {
        userId,
        language: selectedLanguage,
        section,
        messages: messages.map((message) => ({
          role: message.role,
          content: message.content,
          timestamp: message.timestamp,
        })),
      };

      await saveConversationAPI(conversationData);
      alert('Conversation saved successfully!');
      setModalOpen(false);
      setConversationTitle('');
    } catch (error) {
      console.error('Error saving conversation:', error.message);
      setSavingError('Failed to save conversation. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col p-6 bg-gradient-to-br from-blue-200 to-green-300 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Conversation in {section} ({selectedLanguage})</h3>

      {savingError && (
        <div className="p-2 bg-red-100 text-red-800 rounded mb-4">
          {savingError}
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-4 bg-white rounded-lg shadow-inner space-y-3">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs p-3 rounded-lg shadow ${message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'}`}>
              <p className="text-sm">{message.content}</p>
              <p className="text-xs text-gray-300">{new Date(message.timestamp).toLocaleTimeString()}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-xs p-3 bg-yellow-500 text-white rounded-lg shadow animate-pulse">
              Typing...
            </div>
          </div>
        )}
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
          className="ml-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Send
        </button>
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="mt-4 p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
      >
        Save Conversation
      </button>

      <SaveConversationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title={conversationTitle}
        setTitle={setConversationTitle}
        onSave={handleSaveConversation}
        isSaving={isSaving}
      />
    </div>
  );
};

export default Chatbot;
