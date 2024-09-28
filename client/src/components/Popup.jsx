import React, { useState } from 'react';

const Popup = ({ isOpen, onClose, onSave }) => {
  const [conversationName, setConversationName] = useState('');

  const handleSave = () => {
    onSave(conversationName);
    onClose(); // Close the modal after saving
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>Save Conversation</h2>
        <input
          type="text"
          placeholder="Enter conversation name"
          value={conversationName}
          onChange={(e) => setConversationName(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Popup;
