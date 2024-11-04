
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Login from './component/login/login';
// import Signup from './component/login/signup';
// import Sidebar from './component/sidebar/sidebar';
// import Home from './component/movie/index';
// import Layout from './component/Layout/layout';
// import AllMovie from './component/AllMovie/AllMovie';
// import AllPopular from './component/AllMovie/AllPopular';
// import LatestTv from './component/AllMovie/LatestTv';
// import Homepage from './component/pages/homepage';
// import Popular from './component/movie/Popular';
// import AllLatestDetail from './component/Details/AllLatestDetails';
// import AllMovieDetail from './component/Details/AllMovieDetails';
// import PopularDetail from './component/Details/PopularDetails';

// import SearchResults from'./component/Search/SearchResult';

// const App = () => {
//   return (
//     <div>
    
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/sidebar" element={<Sidebar />} />
//           <Route path="/allmovie" element={<AllMovie />} />
//           <Route path="/allpopular" element={<AllPopular />} />
//           <Route path="/alllatest" element={<LatestTv />} />
//           <Route path="/homepage" element={<Homepage />} />
//           <Route path="/popular" element={<Popular />} />
//           <Route path="/Populardetails/:id" element={<PopularDetail />} />
//           <Route path="/alllatestdetails/:id" element={<AllLatestDetail />} />
//           <Route path="/allmoviedetails/:id" element={<AllMovieDetail />} />
//           <Route path="/searchresults" component={<SearchResults />} />

//         </Route>
//       </Routes>
    
  
//     </div>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Layout from './component/Layout/layout';
// import Home from './component/movie/index';
// import Login from './component/login/login';
// import Signup from './component/login/signup';
// import Sidebar from './component/sidebar/sidebar';
// // import AllMovie from './component/AllMovie/AllMovie';
// import AllPopular from './component/AllMovie/AllPopular';
// import LatestTv from './component/AllMovie/LatestTv';
// import Homepage from './component/pages/homepage';
// import Popular from './component/movie/Popular';
// import AllLatestDetail from './component/Details/AllLatestDetails';
// import AllMovieDetail from './component/Details/AllMovieDetails';
// import PopularDetail from './component/Details/PopularDetails';
// import RelatedMovie from './component/UserRanking/RelatedMovie';
// import AllMovie from './component/AllMovie/AllMovie';
// import { MovieData } from './component/Data/Data';
// import SearchResult from './component/Search/SearchResult';
// import Footer from './component/Layout/footer';
// // import Rama from './component/movie/rama';



// const App = () => {
//   const[data, setData] =useState([...MovieData])
//   return (
//     <div>
    
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/sidebar" element={<Sidebar />} />
//           <Route path="/allmovie" element={<AllMovie />} />
//           <Route path="/allpopular" element={<AllPopular />} />
//           <Route path="/alllatest" element={<LatestTv />} />
//           <Route path="/homepage" element={<Homepage />} />
//           <Route path="/popular" element={<Popular />} />
//           <Route path="/Populardetails/:id" element={<PopularDetail />} />
//           <Route path="/alllatestdetails/:id" element={<AllLatestDetail />} />
//           <Route path="/allmoviedetails/:id" element={<AllMovieDetail />} />
//           <Route path="/related" element={<RelatedMovie MovieData={data}/>}/>
//           <Route path="/search/:searchTerm" element={<SearchResult />} />
//           <Route path="/footer" element={<Footer />} />
//         </Route>
//       </Routes>
//      {/* <Rama/> */}
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Layout from './component/Layout/layout';
// import Home from './component/movie/index';
// import Login from './component/login/login';
// import Signup from './component/login/signup';
// import Sidebar from './component/sidebar/sidebar';
// import AllPopular from './component/AllMovie/AllPopular';
// import LatestTv from './component/AllMovie/LatestTv';
// import Homepage from './component/pages/homepage';
// import Popular from './component/movie/Popular';
// import AllLatestDetail from './component/Details/AllLatestDetails';
// import AllMovieDetail from './component/Details/AllMovieDetails';
// import PopularDetail from './component/Details/PopularDetails';
// import RelatedMovie from './component/UserRanking/RelatedMovie';
// import AllMovie from './component/AllMovie/AllMovie';
// import SearchResult from './component/Search/SearchResult';
// import Footer from './component/Layout/footer';
// import Footersecond from './component/Layout/footersecond';
//  // Import FooterSecond component
// import { MovieData } from './component/Data/Data';
// const App = () => {
//   const [data, setData] = useState([...MovieData]);
//   const location = useLocation(); // Use useLocation hook to get the current location

//   return (
//     <div>
    
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/sidebar" element={<Sidebar />} />
//           <Route path="/allmovie" element={<AllMovie />} />
//           <Route path="/allpopular" element={<AllPopular />} />
//           <Route path="/alllatest" element={<LatestTv />} />
//           <Route path="/homepage" element={<Homepage />} />
//           <Route path="/popular" element={<Popular />} />
//           <Route path="/Populardetails/:id" element={<PopularDetail />} />
//           <Route path="/alllatestdetails/:id" element={<AllLatestDetail />} />
//           <Route path="/allmoviedetails/:id" element={<AllMovieDetail />} />
//           <Route path="/related" element={<RelatedMovie MovieData={data} />} />
//           <Route path="/search/:searchTerm" element={<SearchResult />} />
//         </Route>
//       </Routes>
//       {/* Render the footer outside of the <Routes> component */}
//       {location.pathname === "/homepage" ?  "":<Footer/> }
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout/layout';
import Home from './component/movie/index';
import Login from './component/login/login';
// import Signup from './component/login/signup';
import Signup from './component/login/signup';
import Sidebar from './component/sidebar/sidebar';
import AllPopular from './component/AllMovie/AllPopular';
import LatestTv from './component/AllMovie/LatestTv';
import Indexhomepage from './component/pages';
import Popular from './component/movie/Popular';
import AllLatestDetail from './component/Details/AllLatestDetails';
import AllMovieDetail from './component/Details/AllMovieDetails';
import PopularDetail from './component/Details/PopularDetails';
import RelatedMovie from './component/UserRanking/RelatedMovie';
import AllMovie from './component/AllMovie/AllMovie';
import SearchResult from './component/Search/SearchResult';
// import Indexhomepage from './component/pages';
import { MovieData } from './component/Data/Data';
// import Rama from './component/movie/rama';
const App = () => {
  const [data] = useState([...MovieData]);
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/allmovie" element={<AllMovie />} />
          <Route path="/allpopular" element={<AllPopular />} />
          <Route path="/alllatest" element={<LatestTv />} />
          <Route path="/indexhomepage" element={<Indexhomepage />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/Populardetails/:id" element={<PopularDetail />} />
          <Route path="/alllatestdetails/:id" element={<AllLatestDetail />} />
          <Route path="/allmoviedetails/:id" element={<AllMovieDetail />} />
          <Route path="/related" element={<RelatedMovie MovieData={data} />} />
          <Route path="/search/:searchTerm" element={<SearchResult />} />
        </Route>
      </Routes>
      {/* <Indexhomepage/> */}
{/* <Rama/> */}
    </div>
  );
};

export default App;
