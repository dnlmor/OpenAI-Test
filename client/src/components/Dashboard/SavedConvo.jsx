import React, { useEffect, useState } from 'react';
import { getConversations, saveConversation } from '../../services/conversation';

const SaveConvo = () => {
  const [conversations, setConversations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [conversationName, setConversationName] = useState('');
  const [savingError, setSavingError] = useState('');

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const data = await getConversations();
        setConversations(data);
      } catch (error) {
        console.error('Error fetching saved conversations:', error);
      }
    };

    fetchConversations();
  }, []);

  const handleSaveConversation = async () => {
    if (conversationName.trim()) {
      try {
        const newConversationData = { name: conversationName, messages: [] };
        await saveConversation(newConversationData);
        setIsModalOpen(false);
        setConversationName('');
        // Fetch conversations again after saving
        const data = await getConversations();
        setConversations(data);
      } catch (error) {
        setSavingError('Failed to save conversation. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Saved Conversations</h2>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 p-2 bg-blue-600 text-white rounded"
      >
        Save Current Conversation
      </button>
      {savingError && <p className="text-red-600">{savingError}</p>}
      {conversations.length > 0 ? (
        <ul className="list-disc pl-5">
          {conversations.map((conversation, index) => (
            <li key={index} className="mb-2">
              <strong>{conversation.name}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved conversations yet.</p>
      )}

      {/* Save Conversation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Save Conversation</h3>
            <input
              type="text"
              value={conversationName}
              onChange={(e) => setConversationName(e.target.value)}
              placeholder="Conversation Name"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveConversation}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SaveConvo;
