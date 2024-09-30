import { useCallback } from 'react';
import { downloadConversationPDF } from '../api/pdfApi';

const useDownload = () => {
  const handleDownload = useCallback(async (conversationId) => {
    await downloadConversationPDF(conversationId);
  }, []);

  return { handleDownload };
};

export default useDownload;
