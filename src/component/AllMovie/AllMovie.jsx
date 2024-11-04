
import React, { useState } from 'react';
import * as Icon from '../../assest/icon';
import { FaSortAmountDown, FaChevronDown, FaFolderOpen,FaCheck } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';
import TopUSerRank from '../UserRanking/TopUSerRank';
import BestUser from '../UserRanking/BestUser';
import { Link } from 'react-router-dom';
import { MovieData } from '../Data/Data';
import Pagination from '../pagination/pagination';

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
        <FaChevronDown className="text-primary" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-8 bg-gray-500 rounded shadow-md">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`py-2 px-4 cursor-pointer flex items-center ${
                selectedOption === option ? 'bg-gray-900 text-white' : ''
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

const AllMovie = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 2;

  const genresData = [...new Set(MovieData.map((item) => item.genres))];
  const sortOptions = [...new Set(MovieData.map((item) => item.sort))];
  const yearsData = [...new Set(MovieData.map((item) => item.year))];

  const filteredData = MovieData.filter((item) => {
    return (
      (!selectedGenre || item.genres === selectedGenre) &&
      (!selectedYear || item.year === selectedYear) &&
      (!selectedSort || item.sort === selectedSort)
    );
  });

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = filteredData.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="mt-14">
      <div className="bg-black flex">
        <div className="ml-4">
          <div className="flex">
            <h1 className="text-xl font-bold text-white mt-4">All Movies</h1>
            <Icon.DoubleRight className="w-4 mt-6 text-white" />
          </div>
          <div className="flex gap-4 ml-4 mt-4 mb-4 border-b border-gray-800 pt-6 pb-6">
            <div className="flex gap-2">
              <FaFolderOpen className="text-teritory" />
              <FilterDropdown
                title="Genres" options={genresData}onSelect={setSelectedGenre}selectedOption={selectedGenre}
              />
            </div>
            <div className="flex gap-2 ">
              <SlCalender className="text-teritory" />
              <FilterDropdown
                title="Years" options={yearsData}  onSelect={setSelectedYear}  selectedOption={selectedYear} 
              />
            </div>
            <div className="flex gap-2">
              <FaSortAmountDown className="text-teritory" />
              <FilterDropdown
                title="Sort"   options={sortOptions}  onSelect={setSelectedSort}  selectedOption={selectedSort}
              />
            </div>
            <div className="flex ml-[490px] gap-4 ">
              <BsFillGrid3X3GapFill className="text-primary h-6 w-6" />
              <FaThList className="text-teritory h-6 w-6" />
            </div>
          </div>
          <div className="grid grid-cols-5">
            {currentProducts.map((item, index) => (
              <Link key={index} to={`/allmoviedetails/${item.id}`}>
                <div>
                  <div class="relative group">
                    <img
                      src={item.img}
                      alt=""
                      class="w-[165px] h-60 rounded-lg border-zinc border border-2 transform transition-transform hover:scale-110"
                    />
                    <p class="border border-2-black w-14 rounded-lg text-center text-primary bg-black absolute top-2 ml-24 font-bold text-[10px] p-1">
                      1080p
                    </p>
                    <p className="absolute bg-lightblack rounded-lg h-[300px] text-white w-60 p-2 top-2 left-20 hidden group-hover:block z-10">
                      {item.description}
                    </p>
                  </div>
                  <div class="font-bold text-white hover:text-primary mt-4">{item.name}</div>
                  <div class="font-bold text-white hover:text-teritory mt-4 mb-4">{item.year}</div>
                  <p>{item.genres}</p>
                  <p>{item.sort}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className=" ml-4 mr-4">
          <TopUSerRank />
          <BestUser />
        </div>
      </div>

      <div className="bg-black flex justify-center text-white gap-4 pb-4 ">
        {currentPage !== 1 && <button onClick={handlePrevClick}>Prev</button>}
        <Pagination
          productPerPage={productPerPage}
          totalProduct={filteredData.length}
          paginate={paginate}
          activePage={currentPage}
        />
        {currentPage !== Math.ceil(filteredData.length / productPerPage) && (
          <button onClick={handleNextClick}>Next</button>
        )}
      </div>
    </div>
  );
};

export default AllMovie;
