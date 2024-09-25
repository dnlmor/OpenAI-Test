import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-lg font-bold mb-4">Navigation</h2>
      <ul>
        <li className="mb-2">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link to="/signup" className="hover:underline">Signup</Link>
        </li>
        <li className="mb-2">
          <Link to="/saved-conversations" className="hover:underline">Saved Conversations</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
