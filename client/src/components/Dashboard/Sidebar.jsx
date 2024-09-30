import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ logout }) => {
  return (
    <div className="sidebar bg-blue-600 text-white w-64 h-screen shadow-lg">
      <div className="logo text-center p-4 font-bold text-xl">My App</div>
      <nav className="mt-6">
        <ul>
          <li className="py-2 px-4 hover:bg-blue-500 transition duration-200">
            <Link to="/dashboard" className="flex items-center">
              <FaHome className="mr-2" /> Dashboard
            </Link>
          </li>
          <li className="py-2 px-4 hover:bg-blue-500 transition duration-200">
            <Link to="/profile" className="flex items-center">
              <FaUser className="mr-2" /> Profile
            </Link>
          </li>
          <li className="py-2 px-4 hover:bg-blue-500 transition duration-200" onClick={logout}>
            <Link to="/login" className="flex items-center">
            <span className="flex items-center cursor-pointer">
              <FaSignOutAlt className="mr-2" /> Logout
            </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
