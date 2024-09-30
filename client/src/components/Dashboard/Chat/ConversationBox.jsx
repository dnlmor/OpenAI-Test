import React from 'react';

const ConversationBox = ({ conversation, onClick }) => {
  return (
    <div
      className="p-4 border rounded-lg mb-2 cursor-pointer hover:bg-gray-200"
      onClick={() => onClick(conversation.id)}
    >
      <h3 className="font-bold">{conversation.name}</h3>
      <p>{conversation.lastMessage}</p>
    </div>
  );
};

export default ConversationBox;
