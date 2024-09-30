import React from 'react';
import { downloadConversationPDF } from '../../../api/pdfApi';

const DownloadButton = ({ conversationId }) => {
  const handleDownload = async () => {
    try {
      await downloadConversationPDF(conversationId);
    } catch (error) {
      alert('Failed to download the conversation.');
    }
  };

  return (
    <button
      className="mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
      onClick={handleDownload}
    >
      Download Conversation
    </button>
  );
};

export default DownloadButton;
