const PDFDocument = require('pdfkit');

exports.createPDF = (conversation) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    let buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      const pdfData = Buffer.concat(buffers);
      resolve(pdfData);
    });

    doc.fontSize(25).text(`Conversation: ${conversation.name}`, { align: 'center' });
    doc.moveDown();

    conversation.messages.forEach((msg) => {
      doc.fontSize(12).text(`${msg.sender}: ${msg.text}`);
    });

    doc.end();
  });
};
