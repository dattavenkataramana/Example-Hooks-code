import React, { useState } from 'react';
const data = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes'];


const SearchComponent = ({ data }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    filterData(inputValue);
  };

  const filterData = (searchQuery) => {
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


export default SearchComponent