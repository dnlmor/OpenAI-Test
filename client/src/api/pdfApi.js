import axios from 'axios';

const API_URL = '/api/pdf';

export const downloadConversationPDF = async (conversationId) => {
  try {
    const response = await axios.get(`${API_URL}/download/${conversationId}`, {
      responseType: 'blob',
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `conversation_${conversationId}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error('Error downloading PDF:', error);
    throw error;
  }
};
