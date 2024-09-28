import React, { useState } from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import Dashboard from '../components/Dashboard/Dashboard';
import LogoutButton from '../components/LogoutButton';

const DashboardPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedSection, setSelectedSection] = useState('');

  const handleLanguageChange = (language) => setSelectedLanguage(language);
  const handleSectionChange = (section) => setSelectedSection(section);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6">
        <Dashboard 
          selectedLanguage={selectedLanguage} 
          selectedSection={selectedSection} 
          onLanguageChange={handleLanguageChange} 
          onSectionChange={handleSectionChange} 
        />
        <LogoutButton />
      </div>
    </div>
  );
};

export default DashboardPage;
