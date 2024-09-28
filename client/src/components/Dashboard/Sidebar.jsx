import React, { useState, useEffect } from 'react';
import { getConversations } from '../../services/conversation';

const Sidebar = ({ onConversationClick, isOpen, toggleSidebar }) => {
  const [conversations, setConversations] = useState([]);

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

  return (
    <div className={`bg-gray-800 text-white w-64 p-4 fixed top-0 left-0 h-full z-20 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button
        onClick={toggleSidebar}
        className="text-white bg-blue-600 px-4 py-2 mb-4 rounded"
      >
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      <h2 className="text-xl font-bold mb-4">Saved Conversations</h2>
      {conversations.length > 0 ? (
        <ul className="space-y-3">
          {conversations.map((conversation, index) => (
            <li key={index}>
              <button
                onClick={() => onConversationClick(conversation)}
                className="w-full p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
              >
                {conversation.name || `Conversation from ${new Date(conversation.createdAt).toLocaleDateString()}`}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved conversations yet.</p>
      )}
    </div>
  );
};

export default Sidebar;
