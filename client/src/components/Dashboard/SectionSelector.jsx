import React from 'react';

const SectionSelector = ({ onSelectSection }) => {
  const sections = ['Training', 'Simulation Test'];

  const handleSelectSection = (section) => {
    onSelectSection(section);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => handleSelectSection(section)}
          className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded transition duration-200"
        >
          {section}
        </button>
      ))}
    </div>
  );
};

export default SectionSelector;
