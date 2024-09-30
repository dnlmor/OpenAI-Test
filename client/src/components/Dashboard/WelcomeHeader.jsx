import React from 'react';

const WelcomeHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <h1 className="text-xl">Welcome to the Chat App</h1>
      <button className="bg-red-500 p-2 rounded">Logout</button>
    </header>
  );
};

export default WelcomeHeader;
