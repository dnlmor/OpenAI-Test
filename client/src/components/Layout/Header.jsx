import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import SidebarToggle from '../UI/SidebarToggle';

const Header = ({ onToggleSidebar }) => {
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <header className="flex justify-between items-center bg-blue-600 p-4 shadow-lg text-white">
      <div className="flex items-center">
        <SidebarToggle onToggle={onToggleSidebar} />
        <h1 className="text-xl font-bold ml-4">My App</h1>
      </div>

      <div className="flex items-center">
        <span className="ml-4 text-sm font-semibold">{user?.name}</span>
        <button
          onClick={handleLogout}
          className="ml-4 bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
