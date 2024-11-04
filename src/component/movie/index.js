import React from 'react'
import Movie from './movie'
import Latest from './LatestTvShow';
import Popular from './Popular';
// import Navbar from"../../component/Layout/navbar";
import Homepage from '../Home/home';

// import Rama from './rama';

// Filters
const Alldata = () => {
  return (
    <div>
      <Homepage/>
      {/* <Rama/> */}
      {/* <Navbar/> */}
      <Movie/>
      <Latest/>
      <Popular/>
     
    
    </div>
  )
}

export default Alldata;
