import React from 'react';

const SectionSelector = ({ onSectionChange }) => {
  const sections = ['Lessons', 'Tips', 'Simulation Test'];

  return (
    <div className="mt-4 flex flex-wrap">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onSectionChange(section)}
          className="bg-green-600 text-white rounded-lg px-4 py-2 m-2 hover:bg-green-700"
        >
          {section}
        </button>
      ))}
    </div>
  );
};

export default SectionSelector;
