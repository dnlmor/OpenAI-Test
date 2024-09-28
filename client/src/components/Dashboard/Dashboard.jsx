import React, { useState } from 'react';
import Chatbot from './Chatbot';
import Sidebar from './Sidebar';

const languages = ["French", "Italian", "Japanese", "Mandarin", "Indonesian", "Korean", "English", "Spanish"];
const sections = ["Lessons", "Tips", "Simulation Test"];

const Dashboard = ({ selectedLanguage, selectedSection, onLanguageChange, onSectionChange }) => {
  const [isLanguageModalOpen, setLanguageModalOpen] = useState(false);
  const [isSectionModalOpen, setSectionModalOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeConversation, setActiveConversation] = useState(null);
  
  // Handle opening saved conversations
  const handleConversationClick = (conversation) => {
    setActiveConversation(conversation);
    setSidebarOpen(false);
  };

  const handleLanguageSelect = (lang) => {
    onLanguageChange(lang);
    setLanguageModalOpen(false);
    setSectionModalOpen(true);
  };

  const handleSectionSelect = (section) => {
    onSectionChange(section);
    setSectionModalOpen(false);
    setShowMessage(true);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar 
        onConversationClick={handleConversationClick} 
        isOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />

      {/* Main Dashboard Content */}
      <div className={`flex-grow p-4 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <h1 className="text-2xl font-bold">Welcome to FIJIMIKES Language Learning Center</h1>
        <p className="mt-2">Please select a language and section to start learning:</p>
        <button
          onClick={() => setLanguageModalOpen(true)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Choose Language
        </button>

        {showMessage && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
            You have selected <strong>{selectedLanguage}</strong> in the <strong>{selectedSection}</strong> section.
          </div>
        )}

        {/* Chatbot with active conversation */}
        {selectedLanguage && selectedSection && (
          <Chatbot 
            language={selectedLanguage} 
            section={selectedSection} 
            activeConversation={activeConversation}
          />
        )}

        {/* Language Selection Modal */}
        {isLanguageModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Choose a Language</h2>
              <div className="flex flex-wrap">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageSelect(lang)}
                    className="m-2 bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setLanguageModalOpen(false)}
                className="mt-4 bg-gray-500 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Section Selection Modal */}
        {isSectionModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Choose a Section</h2>
              <div className="flex flex-wrap">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => handleSectionSelect(section)}
                    className="m-2 bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    {section}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setSectionModalOpen(false)}
                className="mt-4 bg-gray-500 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
