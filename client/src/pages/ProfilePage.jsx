import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getConversations, deleteConversation } from '../api/profileApi';
import SavedConvoList from '../components/Profile/SavedConvoList';
import { generatePDF } from '../utils/pdfUtils';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [conversations, setConversations] = useState([]); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchConversations = async () => {
      setLoading(true);
      try {
        const data = await getConversations();
        setConversations(data || []); 
      } catch (error) {
        console.error('Error fetching conversations', error);
        setConversations([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteConversation(id);
      setConversations(conversations.filter((conv) => conv._id !== id));
    } catch (error) {
      console.error('Error deleting conversation', error);
    }
  };

  const handleDownload = (conversation) => {
    generatePDF(conversation.messages);
  };

  return (
    <div className="profile-page max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

      {/* Profile Header */}
      <div className="profile-header flex items-center mb-8">
        <div className="profile-picture w-24 h-24 rounded-full bg-gray-300 mr-4 flex items-center justify-center text-4xl text-white">
          {user?.name?.charAt(0)}
        </div>
        <div className="profile-info flex-1">
          <h2 className="text-2xl font-semibold">{user?.name}</h2>
          <p className="text-gray-600">{user?.email}</p>
          {/* <p className="text-gray-500">Joined: {new Date(user?.createdAt).toLocaleDateString()}</p> */}
        </div>
      </div>

      {/* Saved Conversations Section */}
      <div className="saved-conversations bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Saved Conversations</h2>
        {loading ? (
          <div>Loading conversations...</div>
        ) : (
          <SavedConvoList 
            conversations={conversations} 
            onDelete={handleDelete} 
            onDownload={handleDownload} 
          />
        )}
      </div>

      {/* Additional Features (optional) */}
      <div className="flex justify-center mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200">
          Edit Profile
        </button>
        <button className="bg-red-600 text-white ml-4 px-4 py-2 rounded-lg shadow hover:bg-red-700 transition duration-200">
          Logout
        </button>
      </div>

      {/* Go Back to Dashboard Button */}
      <div className="flex justify-center mt-4">
        <button 
          className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition duration-200"
          onClick={() => navigate('/dashboard')}
        >
          Go Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
