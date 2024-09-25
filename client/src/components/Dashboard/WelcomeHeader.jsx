import React from 'react';

const WelcomeHeader = () => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg mb-4">
      <h2 className="text-2xl font-semibold">Welcome to Your Dashboard!</h2>
      <p className="text-gray-600">Here you can interact with the chatbot and manage your settings.</p>
    </div>
  );
};

export default WelcomeHeader;
