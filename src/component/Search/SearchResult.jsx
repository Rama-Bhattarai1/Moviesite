
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieData } from '../Data/Data';
import { PopularData } from '../Data/Data';
import { LatestData } from '../Data/Data';
import * as Icon from '../../assest/icon';
import { SlCalender } from 'react-icons/sl';
import { CgMenuGridR } from "react-icons/cg";
import { FaPlay,FaRegHeart,FaFolderOpen,FaSortAmountDown} from "react-icons/fa";
import TopUSerRank from '../UserRanking/TopUSerRank';
import BestUser from '../UserRanking/BestUser';
const SearchResult = () => {
  const { searchTerm } = useParams();
  const [filterData, setFilterData] = useState([]);
  const allData = [...MovieData, ...PopularData, ...LatestData];

  useEffect(() => {
    const filteredData = allData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterData(filteredData); 
  }, [searchTerm]);

  return (
    <div className='bg-black flex gap-10'>
   
    <div className='mt-14'>
      {filterData.map((item) => (
        <div key={item.id}>
              <div className='flex text-white pt-8 text-xl gap-4 mb-6'><h1>Result For</h1> <span className=' text-xl text-primary'>{item.name}</span></div>
              <div className=' flex'>
              <div className='flex gap-4 ml-4 mt-4 mb-4 '>
            <div className='flex text-white gap-1'>
              <FaFolderOpen className='mt-1 text-teritory' />Geners
              <Icon.DownAero className='w-4 text-primary mt-2  ' />
            </div>
            <div className='flex text-white gap-1'>
              <SlCalender className='mt-1 text-teritory' />Years
              <Icon.DownAero className='w-4 text-primary mt-2  ' />
            </div>
            <div className='flex text-white gap-1'>
              <FaSortAmountDown className='mt-1 text-teritory' />Sort
              <Icon.DownAero className='w-4 text-primary mt-2  ' />
            </div>
          </div>
          <div className='flex ml-[400px] mt-4'>
              <CgMenuGridR className='text-teritory'/>
              <CgMenuGridR className='text-teritory'/>
              </div>
          </div>

       

          <div className='flex gap-8'>
            <div>
         <img src={item.img} alt="" className='w-60 h-120 rounded-lg border border-black-2 my-4 mx-auto'/> 
         </div>
          <div className='text-white'>
          <span className='text-xl font-bold'>{item.name}</span>
          <span className='ml-40'>{item.description}</span>
          <div className='flex gap-4 mt-4'>
          <button  className='flex text-white border rounded-3xl w-40 h-10 pt-2 pb-2 pl-6 gap-1'><FaPlay className='mt-1 rounded-full bg-primary p-1 text-black'/>Watch Movie</button>
          <button className='flex text-white font-bold gap-1 mt-4'><FaRegHeart className='text-primary mt-1'/>Add to Favorites</button>
          </div>
          </div>
         
        </div>
  
        </div>
      ))}
    </div>
    <div className='ml-6'>
<TopUSerRank/>
<BestUser/>
</div>
    </div>
  );
};

export default SearchResult;
