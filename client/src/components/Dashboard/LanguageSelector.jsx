import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const languages = ['French', 'Italian', 'Japanese', 'Indonesian', 'Mandarin', 'English', 'Korean', 'Spanish'];

const LanguageSelector = ({ onLanguageSelect }) => {
  const { setLanguage } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLanguageSelect = (language) => {
    setLanguage(language);
    onLanguageSelect();
    setIsModalOpen(false);
  };

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Choose Language
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl mb-4 text-gray-800">Select a Language</h2>
            <ul>
              {languages.map((language) => (
                <li key={language} className="mb-2">
                  <button
                    onClick={() => handleLanguageSelect(language)}
                    className="text-blue-600 hover:underline"
                  >
                    {language}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
