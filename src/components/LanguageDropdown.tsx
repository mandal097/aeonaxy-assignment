import React, { useState } from 'react';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
    // You can add code to handle the language change here
    console.log(`Selected Language: ${e.target.value}`);
  };

  return (
    <div className="relative inline-block text-left">
      <select
        value={selectedLanguage}
        onChange={handleChange}
        className="block appearance-none w-full bg-white border border-gray-800 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="" disabled>Select Language</option>
        <option value="en" selected>English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        {/* Add more languages as needed */}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 12a2 2 0 100-4 2 2 0 000 4z"
          />
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default LanguageDropdown;
