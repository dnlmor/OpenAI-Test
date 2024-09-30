import React from 'react';

const Message = ({ sender, message, timestamp }) => {
  const messageClass = sender === 'User' ? 'text-left' : 'text-right';
  return (
    <div className={`message ${messageClass} mb-2`}>
      <span className="font-semibold">{sender}</span>: {message}
      <div className="text-gray-500 text-xs">{timestamp}</div>
    </div>
  );
};

export default Message;
