import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">My Application</h1>
        <nav className="mt-2">
          <Link to="/login" className="mr-4 hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Signup</Link>
        </nav>
      </header>
      <main className="flex-grow p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} My Application
      </footer>
    </div>
  );
};

export default Layout;
