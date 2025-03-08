import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      onSearch(query); // Trigger search
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black w-64"
      />
    </div>
  );
};

export default SearchBar;