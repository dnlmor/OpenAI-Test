import React, { useState } from 'react';
import Chatbot from '../components/Dashboard/Chatbot';
import Sidebar from '../components/Dashboard/Sidebar';
import Dashboard from '../components/Dashboard/Dashboard';
import LogoutButton from '../components/LogoutButton';

const DashboardPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedSection, setSelectedSection] = useState('');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6">
        <Dashboard onLanguageChange={handleLanguageChange} onSectionChange={handleSectionChange} />
        {selectedLanguage && selectedSection && (
          <Chatbot language={selectedLanguage} section={selectedSection} />
        )}
        <LogoutButton />
      </div>
    </div>
  );
};

export default DashboardPage;
