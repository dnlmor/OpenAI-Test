import React from 'react';

const LanguageSelector = ({ onLanguageChange }) => {
  const languages = [
    'French',
    'Italian',
    'Japanese',
    'Mandarin',
    'Indonesian',
    'Korean',
    'English',
    'Spanish'
  ];

  return (
    <div className="mt-4 flex flex-wrap">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => onLanguageChange(lang)}
          className="bg-blue-600 text-white rounded-lg px-4 py-2 m-2 hover:bg-blue-700"
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
