import React, { useState } from 'react';
import Chatbot from './Chatbot';

const languages = [
  "French", "Italian", "Japanese", "Mandarin",
  "Indonesian", "Korean", "English", "Spanish"
];

const sections = [
  "Grammar", "Vocabulary", "Pronunciation", "Culture"
];

const Dashboard = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [isLanguageModalOpen, setLanguageModalOpen] = useState(false);
  const [isSectionModalOpen, setSectionModalOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setLanguageModalOpen(false);
    setSectionModalOpen(true);
  };

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    setSectionModalOpen(false);
    setShowMessage(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to FIJIMIKES Language Learning Center</h1>
      <p className="mt-2">Please select a language and section to start learning:</p>
      <button
        onClick={() => setLanguageModalOpen(true)}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Choose Language
      </button>

      {/* Display selected language and section message */}
      {showMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
          You have selected <strong>{selectedLanguage}</strong> in the <strong>{selectedSection}</strong> section.
        </div>
      )}

      {/* Chatbot Component */}
      {selectedLanguage && selectedSection && (
        <Chatbot language={selectedLanguage} section={selectedSection} />
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
  );
};

export default Dashboard;
