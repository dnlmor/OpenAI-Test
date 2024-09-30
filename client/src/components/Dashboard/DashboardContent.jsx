import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import SectionSelector from './SectionSelector';
import Chatbot from './Chat/Chatbot';
import MainLayout from '../Layout/MainLayout';

const DashboardContent = () => {
  const { selectedLanguage } = useLanguage();
  const [section, setSection] = useState('');
  const [showSectionModal, setShowSectionModal] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleLanguageSelect = () => {
    setShowSectionModal(true);
  };

  const handleSectionSelect = (selectedSection) => {
    setSection(selectedSection);
    setShowSectionModal(false);
    setIsChatVisible(true);
  };

  const modalContent = (
    <>
      {showSectionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Select Section</h2>
            <SectionSelector onSelectSection={handleSectionSelect} />
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
                onClick={() => setShowSectionModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <MainLayout modalContent={modalContent}>
      <LanguageSelector onLanguageSelect={handleLanguageSelect} />
      <div className="mt-4 text-lg text-gray-700">
        Selected Language: <strong>{selectedLanguage}</strong>
      </div>
      {isChatVisible && <Chatbot section={section} language={selectedLanguage} />}
    </MainLayout>
  );
};

export default DashboardContent;
