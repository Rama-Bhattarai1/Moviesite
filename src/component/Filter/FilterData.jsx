



import React, { useState } from 'react';
import * as Images from "../../assest/images";
const data = [
  { id: 1, name: 'Item 1', year: 2021, type: 'A', image: 'Images.Image_1.jpg' },
  { id: 2, name: 'Item 2', year: 2021, type: 'B', image: 'Images.Image_1.jpg' },
  { id: 3, name: 'Item 3', year: 2022, type: 'A', image: 'Images.Image_1.jpg' },
  { id: 4, name: 'Item 4', year: 2022, type: 'B', image: 'Images.Image_1.jpg' },
  { id: 5, name: 'Item 5', year: 2023, type: 'A', image: 'Images.Image_1.jpg' },
];

const FilterDropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleDropdownClick}
        className="flex items-center gap-1 text-white hover:text-primary relative"
      >
        {title}
        <span className='text-primary'>{selectedOption ? `: ${selectedOption}` : ''}</span>
        <span className='text-primary ml-1'>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 bg-gray-100 rounded shadow-md">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`py-2 px-4 cursor-pointer flex items-center ${
                selectedOption === option ? 'bg-gray-300' : ''
              }`}
            >
              {selectedOption === option && <span className="mr-2">&#10003;</span>}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Filters = ({ data, onFilter }) => {
  const years = [...new Set(data.map(item => item.year))];
  const types = [...new Set(data.map(item => item.type))];

  const handleFilter = (year, type) => {
    const filteredData = data.filter(item => {
      return (year === null || item.year === year) && (type === null || item.type === type);
    });
    onFilter(filteredData);
  };

  return (
    <div className="flex ml-4 mt-4 mb-4 gap-4">
      <div>
        <FilterDropdown
          title="Year"
          options={[null, ...years]}
          onSelect={(year) => handleFilter(year, null)}
        />
      </div>
      <div>
        <FilterDropdown
          title="Type"
          options={[null, ...types]}
          onSelect={(type) => handleFilter(null, type)}
        />
      </div>
    </div>
  );
};

const App = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (filteredData) => {
    setFilteredData(filteredData);
  };

  return (
    <div>
      <Filters data={data} onFilter={handleFilter} />
      <div>
        <h2>Filtered Data</h2>
        <ul>
          {filteredData.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
              {item.name} {item.year}{item.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

