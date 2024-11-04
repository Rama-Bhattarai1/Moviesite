
import React, { useState } from 'react';
import * as Icon from "../../assest/icon";
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { LatestData } from '../Data/Data';

const Latest = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setVisibleIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleRightArrowClick = () => {
    setVisibleIndex((prevIndex) =>
      Math.min(prevIndex + 1, LatestData.length - 7)
    );
  };

  const totalPages = Math.ceil(LatestData.length / 7);
  const dots = Array.from({ length: totalPages }).map((_, index) => (
    <GoDotFill
      key={index}
      className={`mt-2 hover:text-primary ${index === visibleIndex / 7 ? 'text-primary' : ''}`}
    />
  ));

  return (
    <div className='bg-black pl-4'>
      <div className='flex'>
        <div className='flex gap-4 pt-14 pb-10 '>
          <div className='flex '>
            <h1 className='text-xl font-bold text-white'>LatestTVShow</h1>
            <Icon.DoubleRight className='w-4 mt-1 text-white' />
          </div>
         <Link to="/alllatest" ><button className='border border-teritory text-teritory hover:bg-white hover:text-black p-1 rounded-lg '>All TV Show</button></Link>
        </div>
        <div className="flex text-white h-10 w-15 mt-14 ml-[800px] gap-2">
      <Icon.AeroLeft onClick={handleLeftArrowClick}  />
      {dots}
      <Icon.AeroRight onClick={handleRightArrowClick}/>
    </div>
      </div>
      <div className="grid grid-cols-7  ">
        {LatestData.slice(visibleIndex, visibleIndex + 7).map((item, index) => (
          <Link key={index} to={`/alllatestdetails/${item.id}`}>
            <div>
            <div className="relative group  "> 
                <img src={item.img} alt="" className="w-40 h-60 rounded-lg border-zinc border border-2 transform transition-transform hover:scale-110"/>
                <div className="font-bold text-white hover:text-primary">{item.name}</div>
               
                <p className="absolute bg-black/95 rounded-lg h-[300px] text-white w-60  p-2 top-2 left-20 hidden group-hover:block z-10">{item.description}</p>
             
                <div className="font-bold text-white hover:text-teritory">{item.year}</div>
                <p className="border border-2-black w-14 rounded-lg text-center text-primary bg-black absolute top-2 ml-24 font-bold text-[10px] p-1 ">1080p</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Latest;








// import React, { useRef, useEffect, useState } from 'react';
// import * as Icon from "../../assest/icon";
// import { Link } from 'react-router-dom';
// import { LatestData } from '../Data/Data';

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';
// // import SwiperCore, { Pagination } from 'swiper';
// // import 'swiper/swiper-bundle.min.css';

// // SwiperCore.use([Pagination]);

// const Latest = () => {
//   const slideRef = useRef(null);
//   // const [paginationDots, setPaginationDots] = useState([]);

//   const handleLeftArrowClick = () => {
//     slideRef.current.swiper.slidePrev();
//   };

//   const handleRightArrowClick = () => {
//     slideRef.current.swiper.slideNext();
//   };

 

//   return (
//     <div className='  bg-black pl-4'>
//       <div className='flex'>
//         <div className='flex gap-4 pt-14 pb-10 '>
//           <div className='flex '>
//             <h1 className='text-xl font-bold text-white'>LatestTVShow</h1>
//             <Icon.DoubleRight className='w-4 mt-1 text-white' />
//           </div>
//           <Link to="/alllatest"><button className='border border-teritory text-teritory hover:bg-white hover:text-black p-1 rounded-lg '>All TV Show</button></Link>
//         </div>
//         <div className='flex text-white h-10 w-15 mt-14 ml-[800px] '>
//           <Icon.AeroLeft onClick={handleLeftArrowClick} />
         
//            <div className='.swiper-pagination text-xl  text-white gap-2 '></div>
//           <Icon.AeroRight onClick={handleRightArrowClick} />
//         </div>
//       </div>

//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={10}
//         slidesPerView={7}
//         slidesPerGroup={1}
//         navigation={false}
//         pagination={{
//           clickable: true,
//           el:'.swiper-pagination', 
//         } }
//         ref={slideRef}
//       >
//         {LatestData.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Link to={`/alllatestdetails/${item.id}`}>
//               <div className=' '>
//                 <div className="relative group">
//                   <img src={item.img} alt="" className="w-40 h-60 rounded-lg border-zinc border border-2 transform transition-transform hover:scale-110" />
//                   <div className="font-bold text-white hover:text-primary">{item.name}</div>
//                   <p className="absolute bg-lightblack rounded-lg h-[300px] text-white w-60  p-2 top-2 left-20 hidden group-hover:block z-10">{item.description}</p>
//                   <div className="font-bold text-white hover:text-teritory">{item.year}</div>
//                   <p className="border border-2-black w-14 rounded-lg text-center text-primary bg-black absolute top-2 ml-24 font-bold text-[10px] p-1">1080p</p>
//                 </div>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Latest;

