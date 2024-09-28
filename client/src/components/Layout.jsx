import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Dashboard/Sidebar';

const Layout = ({ children, onConversationClick }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Sidebar onConversationClick={onConversationClick} isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Application</h1>
          <nav className="mt-2">
            <Link to="/login" className="mx-2 hover:underline transition duration-200">Login</Link>
            <Link to="/signup" className="mx-2 hover:underline transition duration-200">Signup</Link>
          </nav>
          <button onClick={toggleSidebar} className="ml-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">Toggle Sidebar</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} My Application</p>
      </footer>
    </div>
  );
};

export default Layout;
