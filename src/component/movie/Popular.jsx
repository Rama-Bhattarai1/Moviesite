

import React, { useState } from 'react';
import * as Icon from "../../assest/icon";
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { PopularData } from '../Data/Data';

const Popular = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleLeftArrowClick = () => {
    // Decrease the index with a delay
    setTimeout(() => {
      setVisibleIndex(prevIndex => Math.max(prevIndex - 1, 0));
    }, 500); // Adjust the delay (in milliseconds) as needed
  };

  const handleRightArrowClick = () => {
    // Increase the index with a delay
    setTimeout(() => {
      setVisibleIndex(prevIndex =>
        Math.min(prevIndex + 1, PopularData.length - 7)
      );
    }, 500); // Adjust the delay (in milliseconds) as needed
  };

  const totalPages = Math.ceil(PopularData.length / 7);
  const dots = Array.from({ length: totalPages }).map((_, index) => (
    <GoDotFill
      key={index}
      className={`mt-2 hover:text-primary ${index === visibleIndex / 7 ? 'text-primary' : ''}`}
    />
  ));

  return (
    <div className='bg-black pl-4'>
      <div className='flex'>
        <div className='flex gap-4 pt-14 pb-10'>
          <div className='flex '>
            <h1 className='text-xl font-bold text-white'>Popular TV Shows</h1>
            <Icon.DoubleRight className="w-4 mt-1 text-white" />
          </div>
          <Link to="/allpopular">
            <button className='border border-teritory text-teritory hover:bg-white hover:text-black p-1 rounded-lg'>All </button>
          </Link>
        </div>
        <div className='flex text-white h-10 w-15 mt-14 ml-[800px] gap-2'>
          <Icon.AeroLeft onClick={handleLeftArrowClick} />
          {dots}
          <Icon.AeroRight onClick={handleRightArrowClick} />
        </div>
      </div>
      <div className="grid grid-cols-7 ml-4 mr-4">
        {PopularData.slice(visibleIndex, visibleIndex + 7).map((item, index) => (
          <Link key={index} to={`/Populardetails/${item.id}`}>
            <div>
              <div className='relative group'>
                <img src={item.img} alt="" className="w-40 h-60 rounded-lg border-zinc border border-2 transform transition-transform hover:scale-110"/>
                <div className="font-bold text-white hover:text-primary">{item.name}</div>
                <div className="font-bold text-white hover:text-teritory">{item.year}</div>
                <p className="absolute bg-black/95 rounded-lg h-[300px] w-60  p-2 top-2 left-20 hidden group-hover:block z-10 text-white">{item.description}</p>
                <p className="border border-2-black w-14 rounded-lg text-center text-primary bg-black absolute top-2 ml-24 font-bold text-[10px] p-1">1080p</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Popular;
