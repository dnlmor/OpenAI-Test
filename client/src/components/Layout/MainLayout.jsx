import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children, onToggleSidebar, modalContent }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header onToggleSidebar={onToggleSidebar} />
      <main className="flex-grow p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      {modalContent}
      <Footer />
    </div>
  );
};

export default MainLayout;
