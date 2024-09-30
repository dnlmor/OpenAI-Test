import React from 'react';
import Modal from '../../UI/Modal';

const SaveConversationModal = ({ isOpen, onClose, title, setTitle, onSave, isSaving }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4">Save Conversation</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter conversation title"
        className="border p-2 w-full mb-4"
        required
      />
      
      <div className="flex justify-end space-x-2">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={onSave}
          disabled={isSaving}
          className={`px-4 py-2 text-white rounded ${isSaving ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          {isSaving ? 'Saving...' : 'Save'}
        </button>
      </div>

    </Modal>
  );
};

export default SaveConversationModal;
