import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="bg-red-600 text-white rounded-lg px-4 py-2 mt-4">Logout</button>
  );
};

export default LogoutButton;
