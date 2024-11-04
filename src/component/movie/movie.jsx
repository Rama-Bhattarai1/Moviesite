
import React,{useState} from 'react';
import * as Icon from '../../assest/icon';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { MovieData } from '../Data/Data';

const Movie = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('featured');

  const handleLeftArrowClick = () => {
    setVisibleIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleRightArrowClick = () => {
    setVisibleIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.ceil(MovieData.length / 7) - 1)
    );
  };

  const handleCategoryChange = (category) => {
    const lowerCaseCategory = category.toLowerCase();
    setSelectedCategory(lowerCaseCategory);
    setVisibleIndex(0);
  };
  

  const filteredMovies = MovieData.filter(
    (movie) => movie.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredMovies.length / 7);
  const dots = Array.from({ length: totalPages }).map((_, index) => (
    <GoDotFill
      key={index}
      className={`mt-2 hover:text-primary ${
        index === Math.floor(visibleIndex / 7) ? 'text-primary' : ''
      }`}
    />
  ));

  return (
    <div className="bg-black pl-4 pr-4">
      <div className="flex ">
        <div className="flex gap-4 pt-14 pb-10">
          <div className="flex ">
            <h1 className="text-xl font-bold text-white">Movies</h1>
            <Icon.DoubleRight className="w-4  mt-1 text-white" />
          </div>
          <Link to="/allmovie">
            <button className="border border-teritory text-teritory hover:bg-white hover:text-black p-1 rounded-lg text-[10px] ">
              All Movies
            </button>
          </Link>

          <ul className="text-white flex gap-4">
          <li
  onClick={() => handleCategoryChange('featured')}
  className={` ${
    selectedCategory === 'featured' ? 'font-bold text-primary' : ''
  }`}
>
  Featured
</li>
<li
  onClick={() => handleCategoryChange('latest releases')}
  className={`${
    selectedCategory === 'latest releases' ? 'font-bold text-primary' : ''
  }`}
>
  Latest Releases
</li>
<li
  onClick={() => handleCategoryChange('mostpopular')}
  className={` ${
    selectedCategory === 'mostpopular' ? 'font-bold text-primary' : ''
  }`}
>
  Most Popular
</li>
          </ul>
        </div>
        <div className="flex text-white h-10 w-15 mt-14 ml-[500px] gap-2">
          <Icon.AeroLeft onClick={handleLeftArrowClick} />
          {dots}
          <Icon.AeroRight onClick={handleRightArrowClick} />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 slider-wrapper">
        {filteredMovies.slice(visibleIndex, visibleIndex + 7).map((item, index) => (
          <Link key={index} to={`/allmoviedetails/${item.id}`}>
            <div className="relative group ">
              <img
                src={item.img}
                alt=""
                className=" w-60 h-60 rounded-lg border border-2 border-zinc transition transform hover:scale-95 group-hover:opacity-90"
              />
              <p className="  border border-2-black w-10 rounded-lg text-center text-primary border-zinc  bg-ston absolute top-2 ml-24 font-bold text-[12px] h-[22px]">
                1080p
              </p>
              <p className=" absolute bg-black/95 text-white border-zinc border-2 rounded-lg h-[300px] w-60  p-2 top-2 left-20 hidden group-hover:block z-10">
                {item.description}
              </p>
              <div className="font-bold text-white hover:text-primary ">
                {item.name}
              </div>
              <div className="font-bold text-white hover:text-teritory mt-4">
                {item.year}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div> 
  );
};

export default Movie;