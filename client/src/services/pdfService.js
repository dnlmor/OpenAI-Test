import axios from 'axios';

const API_URL = '/api/pdf';

const pdfService = {
  downloadPDF: async (conversationId) => {
    const response = await axios.get(`${API_URL}/download/${conversationId}`, {
      responseType: 'blob',
    });
    return response.data;
  },
};

export default pdfService;
