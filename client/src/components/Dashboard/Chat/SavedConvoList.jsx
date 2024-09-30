import React, { useState } from 'react';
import { useChat } from '../../../context/ChatContext';
import { deleteConversation } from '../../../services/conversationService';
import { downloadConversationPDF } from '../../../api/conversationApi';
import { FaTrashAlt, FaDownload } from 'react-icons/fa';

const SavedConvoList = () => {
  const { state, dispatch } = useChat();
  const { conversations } = state;
  const [loadingId, setLoadingId] = useState(null);
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    setLoadingId(id);
    setError(null);
    try {
      await deleteConversation(id);
      dispatch({ type: 'DELETE_CONVERSATION', payload: id });
    } catch (e) {
      setError('Failed to delete conversation. Please try again.');
    } finally {
      setLoadingId(null);
    }
  };

  const handleDownload = async (conversation) => {
    setLoadingId(conversation._id);
    setError(null);
    try {
      await downloadConversationPDF(conversation._id);
    } catch (e) {
      setError('Failed to download conversation. Please try again.');
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {conversations.length === 0 ? (
        <div className="text-gray-500 text-center p-4">
          No saved conversations found.
        </div>
      ) : (
        <ul className="convo-list space-y-4">
          {conversations.map((conversation) => (
            <li
              key={conversation._id}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center hover:shadow-lg transition-shadow duration-200"
            >
              <div>
                <p className="font-bold text-lg">{conversation.section}</p>
                <p className="text-sm text-gray-500">{conversation.messages.length} messages</p>
                <p className="text-sm text-gray-400">
                  {new Date(conversation.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="actions flex space-x-4">
                <button
                  onClick={() => handleDownload(conversation)}
                  className={`bg-green-500 text-white p-2 rounded-lg shadow-md flex items-center hover:bg-green-600 transition duration-200 ${loadingId === conversation._id ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  aria-label="Download conversation"
                  disabled={loadingId === conversation._id}
                >
                  {loadingId === conversation._id ? 'Downloading...' : <><FaDownload className="mr-2" /> Download</>}
                </button>
                <button
                  onClick={() => handleDelete(conversation._id)}
                  className={`bg-red-500 text-white p-2 rounded-lg shadow-md flex items-center hover:bg-red-600 transition duration-200 ${loadingId === conversation._id ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  aria-label="Delete conversation"
                  disabled={loadingId === conversation._id}
                >
                  {loadingId === conversation._id ? 'Deleting...' : <><FaTrashAlt className="mr-2" /> Delete</>}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedConvoList;
