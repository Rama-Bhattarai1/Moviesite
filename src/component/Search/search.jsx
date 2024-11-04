// import React, { useState } from 'react';
// import  AllMovie,{ AllMovieData } from '../AllMovie/AllMovie';

// const Search = () => {
//   const [filter, setFilter] = useState('');

//   const handleSearch = (e) => {
//     setFilter(e.target.value);
//   };

//   const filteredData = AllMovieData.filter((item) =>
//     item.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         name="text"
//         placeholder="Search your product"
//         className="w-80 rounded-xl pl-10 bg-gray-500 text-white"
//         onChange={handleSearch}
//       />
//       <div className='grid grid-cols-5'>
//         {filteredData.map((item, index) => (
//           <div key={index}>
//             <div>{item.name}</div>
//             <div><img src={item.img} alt={item.name} /></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Search;




// import React, { useState } from 'react';
// // import * as Images from "../../assest/images";
// // Import your search icon if needed
// import AllMovie from '../AllMovie/AllMovie';
// // const searchData = [
// //   {
// //     id: 1,
// //     name: "blog1",
// //     img: Images.Image_2,
// //   },
// //   {
// //     id: 2,
// //     name: "blog2",
// //     img: Images.Image_4,
// //   },
// //   {
// //     id: 3,
// //     name: "blog3",
// //     img: Images.Image_6,
// //   },
// //   {
// //     id: 4,
// //     name: "blog4",
// //     img: Images.Image_7,
// //   },
// //   {
// //     id: 5,
// //     name: "blog4",
// //     img: Images.Image_8,
// //   },
// // ];

// const Search = () => {
//   const [filter, setFilter] = useState('');

//   const handleSearch = (e) => {
//     setFilter(e.target.value);
//   };

//   const filteredData = AllMovie.AllMovieData.filter((item) =>
//     item.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         name="text"
//         placeholder="Search your product"
//         className="w-80 rounded-xl pl-10 bg-gray-500 text-white"
//         onChange={handleSearch}
//       />
//       <div className='grid grid-cols-5'>
//         {filteredData.map((item, index) => (
//           <div key={index}>
//             <div>{item.name}</div>
//             <div><img src={item.img} alt=""/></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Search;


// import React, { useState } from 'react';
// import AllMovie, { AllMovieData } from '../AllMovie/AllMovie';
// import AllPopular, { PopularData } from '../AllMovie/AllPopular';
// import Latest, {LatestData}from '../AllMovie/LatestTv';

// const Search = () => {
//   const [filter, setFilter] = useState('');

//   const handleSearch = (e) => {
//     setFilter(e.target.value);
//   };

//   // Combine both movie and popular data for searching
//   const allData = [...AllMovieData, ...PopularData, ...LatestData];

//   const filteredData = allData.filter((item) =>
//     item.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         name="text"
//         placeholder="Search your product"
//         className="w-80 rounded-xl pl-10 bg-gray-500 text-white"
//         onChange={handleSearch}
//       />
//       <div className='grid grid-cols-5'>
//         {filteredData.map((item, index) => (
//           <div key={index}>
//             <div>{item.name}</div>
//             {/* Uncomment the image rendering once you have the correct import statements */}
//             <div><img src={item.img} alt={item.name} /></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Search;

// import React from 'react';

// const Search = ({ searchResults }) => {
//   return (
//     <div>
//       <h1>Search Results</h1>
//       <div className='grid grid-cols-5'>
//         {searchData.map((item, index) => (
//           <div key={index}>
//             <div>{item.name}</div>
//             <div>{item.img}</div>
//             {/* Add more details or styling as needed */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Search;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import AllMovieData from '../AllMovie/AllMovie'; // Make sure to import your data correctly

// const Search = () => {
//   const [filter, setFilter] = useState('');

//   const handleSearch = (e) => {
//     setFilter(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="text"
//         placeholder="Search your product"
//         className="w-80 rounded-xl pl-10 bg-gray-500 text-white"
//         onChange={handleSearch}
//       />
//       <Link to={`/search-results?query=${filter}`} className="text-white">
//         View Search Results
//       </Link>
//     </div>
//   );
// }

// export default Search;



// import React, { useState } from 'react';
// import AllMovie, { AllMovieData } from '../AllMovie/AllMovie';
// import AllPopular, { PopularData } from '../AllMovie/AllPopular';
// import Latest, { LatestData } from '../AllMovie/LatestTv';

// const Search = () => {
//   const [filter, setFilter] = useState('');

//   const handleSearch = (e) => {
//     setFilter(e.target.value);
//   };

//   // Combine both movie and popular data for searching
//   const allData = [...AllMovieData, ...PopularData, ...LatestData];

//   const filteredData = allData.filter((item) =>
//     item.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         name="text"
//         placeholder="Search your product"
//         className="w-80 rounded-xl pl-10 bg-gray-500 text-white"
//         onChange={handleSearch}
//       />
//       {filter && (
//         <div className=''>
//           {filteredData.map((item, index) => (
//             <div key={index}>
//               <div className='flex gap-4'>
//                 <h1 className='font-bold text-xl'>Result For</h1>
//                 <div className='text-xl'>{item.name}    </div>
//                 </div>
//              <div className='flex w-80 h-80  gap-4'>
//               {/* Uncomment the image rendering once you have the correct import statements */}
//               <div><img src={item.img} alt={item.name}  className='w-60 h-60'/></div>
//              <div>
//               <div>{item.name}</div>
//               <p>fgvacsxgacvggascxgacsgasgdgasdcqgfs</p>
//               </div>
//             </div>
//             </div>
//           ))}
//         </div>
//        )} 
//     </div>
//   );
// }

// export default Search;


// import React, { useState } from 'react';
// import AllMovie, { AllMovieData } from '../AllMovie/AllMovie';
// import AllPopular, { PopularData } from '../AllMovie/AllPopular';
// import Latest, { LatestData } from '../AllMovie/LatestTv';

// const Search = () => {
//   const [filter, setFilter] = useState('');

//   const handleSearch = (e) => {
//     setFilter(e.target.value);
//   };

//   // Add a category property to each item
//   const allData = [
//     ...AllMovieData.map(item => ({ ...item, category: 'AllMovie' })),
//     ...PopularData.map(item => ({ ...item, category: 'AllPopular' })),
//     ...LatestData.map(item => ({ ...item, category: 'Latest' })),
//   ];

//   const filteredData = allData.filter((item) =>
//     item.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         name="text"
//         placeholder="Search your product"
//         className="w-80 rounded-xl pl-10 bg-gray-500 text-white"
//         onChange={handleSearch}
//       />
//       {filter && (
//         <div className=''>
//           {filteredData.map((item, index) => (
//             <div key={index}>
//               <div className='flex gap-4'>
//                 <h1 className='font-bold text-xl'>Result For</h1>
//                 <div className='text-xl'>{item.name}</div>
//               </div>
//               <div className='flex w-80 h-80 gap-4'>
//                 {/* Uncomment the image rendering once you have the correct import statements */}
//                 <div><img src={item.img} alt={item.name} className='w-60 h-60' /></div>
//                 <div>
//                   <div>{item.name}</div>
//                   <p>fgvacsxgacvggascxgacsgasgdgasdcqgfs</p>

//                   {/* Conditional rendering based on the category */}
//                   {item.category === 'AllMovie' && (
//                     <div className='all-movie-design'>
//                       {/* Add your specific design for AllMovie category */}
//                       <p style={{ color: 'blue', fontStyle: 'italic' }}>All Movie Specific Design</p>
//                     </div>
//                   )}

//                   {item.category === 'AllPopular' && (
//                     <div className='all-popular-design'>
//                       {/* Add your specific design for AllPopular category */}
//                       <p style={{ color: 'green', fontWeight: 'bold' }}>All Popular Specific Design</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Search;




