import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="w-1/3 bg-gray-800 text-white h-full p-4">
      <h2 className="text-xl mb-4">Dashboard</h2>
      {/* Other sidebar options */}
      <button onClick={handleLogout} className="text-red-500">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
