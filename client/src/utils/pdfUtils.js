import jsPDF from 'jspdf';

export const generatePDF = (chatHistory) => {
  const doc = new jsPDF();
  const title = 'Chat History';
  
  doc.setFontSize(18);
  doc.text(title, 20, 20);
  
  doc.setFontSize(12);
  let y = 30;
  
  chatHistory.forEach((msg) => {
    doc.text(`[${msg.timestamp}] ${msg.sender}: ${msg.message}`, 20, y);
    y += 10;
  });

  doc.save('chat-history.pdf');
};
