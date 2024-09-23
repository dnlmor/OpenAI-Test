import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Popup from '../components/Popup';
import Chatbot from '../components/Chatbot'; // Import your Chatbot component

const DashboardPage = () => {
  // State management
  const [isTestPopupOpen, setIsTestPopupOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState('');
  const [isSectionPopupOpen, setIsSectionPopupOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);

  // Test options
  const testOptions = ['IELTS', 'TOEFL', 'SAT', 'GMAT', 'GRE'];
  const sectionOptions = [
    'Lessons',
    'Exercises',
    'Tips and Tricks',
    'Simulation Tests',
  ];

  const handleTestSelect = (testType) => {
    setSelectedTest(testType);
    setIsSectionPopupOpen(true);
    setIsTestPopupOpen(false);
  };

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    setShowChatbot(true);
    setIsSectionPopupOpen(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h1>
        <button
          onClick={() => setIsTestPopupOpen(true)}
          className="bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 transition"
        >
          Choose a Test
        </button>

        {isTestPopupOpen && (
          <Popup onClose={() => setIsTestPopupOpen(false)} title="Select a Test">
            {testOptions.map((test) => (
              <button
                key={test}
                onClick={() => handleTestSelect(test)}
                className="block w-full text-left p-2 hover:bg-blue-100"
              >
                {test}
              </button>
            ))}
          </Popup>
        )}

        {isSectionPopupOpen && (
          <Popup onClose={() => setIsSectionPopupOpen(false)} title={`Select Section for ${selectedTest}`}>
            {sectionOptions.map((section) => (
              <button
                key={section}
                onClick={() => handleSectionSelect(section)}
                className="block w-full text-left p-2 hover:bg-blue-100"
              >
                {section}
              </button>
            ))}
          </Popup>
        )}

        {showChatbot && (
          <div className="mt-8 p-4 border rounded">
            <h2 className="text-2xl font-bold mb-2">
              You selected: {selectedTest} - {selectedSection}
            </h2>
            <Chatbot test={selectedTest} section={selectedSection} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
