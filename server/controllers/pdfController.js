const pdfService = require('../services/pdfService');

exports.downloadPDF = async (req, res) => {
  const { conversationId } = req.params;
  
  try {
    const pdfBuffer = await pdfService.generatePDF(conversationId);
    
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=conversation_${conversationId}.pdf`,
    });
    res.send(pdfBuffer);
  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ message: 'Error generating PDF' });
  }
};
