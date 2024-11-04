
import React, { useState } from 'react';
import { FaFolderOpen, FaSortAmountDown, FaChevronDown, FaCheck } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import * as Images from '../../assest/images'; // Adjust the import path based on your project structure

const LatestData = [
  {
    id: 1,
    img: Images.Image_10,
    name: "Fargo",
    year: 2023,
    genres: "Action",
    sort: "Latest",
  },
  {
    id: 2,
    img: Images.Image_11,
    name: "Percy Jackson",
    year: 2024,
    genres: "Action",
    sort: "Latest",
  },
  {
    id: 3,
    img: Images.Image_12,
    name: "Night Court",
    year: 2023,
    genres: "Action",
    sort: "Latest",
  },
  {
    id: 4,
    img: Images.Image_13,
    name: "Raising Kanan",
    year: 2025,
    genres: "Drama",
    sort: "Latest",
  },
  {
    id: 5,
    img: Images.Image_14,
    name: "Monarch Legacy of Monsters",
    year: 2025,
    genres: "Drama",
    sort: "popular",
  },
  {
    id: 6,
    img: Images.Image_15,
    name: "Reacher",
    year: 2023,
    genres: "Drama",
    sort: "popular",
  },
  {
    id: 7,
    img: Images.Image_16,
    name: "Slow Horses",
    year: 2024,
    genres: "Drama",
    sort: "popular",
  },
];

const FilterDropdown = ({ title, options, onSelect, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
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
        <FaChevronDown className='text-primary' /> 
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-8 bg-gray-800 rounded shadow-md">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`py-2 px-4 cursor-pointer flex items-center ${
                selectedOption === option ? 'bg-gray-600' : ''
              }`}
            >
              {selectedOption === option && <FaCheck className="mr-2 text-primary" />}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Filters = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);

  const filteredData = LatestData.filter(item => {
    return (!selectedGenre || item.genres === selectedGenre) &&
           (!selectedYear || item.year === selectedYear) &&
           (!selectedSort || item.sort === selectedSort);
  });

  const genresData = [...new Set(LatestData.map(item => item.genres))];
  const sortOptions = [...new Set(LatestData.map(item => item.sort))];
  const yearsData = [...new Set(LatestData.map(item => item.year))];

  return (
    <div className="flex ml-4 mt-4 mb-4 gap-4">
      <div className="flex gap-2">
        <FaFolderOpen className="text-teritory"/> 
        <FilterDropdown title="Genres" options={genresData} onSelect={setSelectedGenre} selectedOption={selectedGenre} />
      </div>
     
      <div className="flex gap-2 ">
        <SlCalender className="text-teritory"/>
        <FilterDropdown title="Years" options={yearsData} onSelect={setSelectedYear} selectedOption={selectedYear} />
      </div>
      
      <div className="flex gap-2">
        <FaSortAmountDown className="text-teritory"/>
        <FilterDropdown title="Sort" options={sortOptions} onSelect={setSelectedSort} selectedOption={selectedSort} />
      </div>

      {/* Render your filtered data here */}
      {filteredData.map(item => (
        <div key={item.id}>
          <span><img
                      src={item.img}
                      alt=''
                      className='w-[165px] h-60 rounded-lg border-zinc border border-2  transform transition-transform hover:scale-110'
                    /></span>
          <p>{item.name}</p>
          <p>{item.year}</p>
          <p>{item.genres}</p>
          <p>{item.sort}</p>
        </div>
      ))}
    </div>
  );
};

export default Filters;

