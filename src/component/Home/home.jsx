import React, { useState } from 'react';
import * as Images from "../../assest/images";
import * as Icon from "../../assest/icon";
import { FaPlay,FaPlus } from "react-icons/fa";
import { AiOutlineUp } from "react-icons/ai";
// import React, { useRef, useState } from 'react';
// Import Swiper React components

// import { FaPlus } from "react-icons/fa";
// import { FaAngleUp } from "react-icons/fa6";

import { FaThumbsDown,FaThumbsUp } from "react-icons/fa";


const Homepage = () => {

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const HomeData = [
    {
      id: 1,
      img: Images.Image_34,
      name:"Wonka",
      description: (
        <>
          <h1 className='text-5xl mb-2'>Wonka</h1>
          <div className="flex gap-6 mb-6">
            <div className="flex gap-2">
          <span><Icon.StarIcon className='w-4 '/></span><span>6.374</span>
          </div>
          <span>2023</span><span>2h38m</span><span>Comedy</span><span>Drama</span><span>Advanture</span><span class=" text-primary bg-teritory border border-2 rounded-lg ">1080p</span>
          </div>
          <p className="text-start mb-2  mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit animi unde illo officia.<br/>esse quasi asperiores neque corrupti fuga in excepturi nulla quos autem alias  <br/> Ex est cupiditate iusto unde illo officia suscipit voluptatibus nobis rem? .</p>
          <div className='gap-24 flex'>
          <div className="flex gap-6  ">
    <div className=" border border-2 rounded-lg  h-[40px]  w-[130px]  text-white  group hover:bg-primary hover:border-primary">
        <button className="transition-colors duration-300 group-hover:text-black p-2  flex  font-bold gap-2  hover:border-primary "> 
         <FaPlay className="text-primary mt-1 font-bold group-hover:text-black" />Play Movie</button>
    </div>
    <div className="border border-2 rounded-lg p-2 h-10 w-[100px] font-bold group hover:bg-primary hover:border-primary">
        <button className="flex gap-2 transition-colors duration-300 group-hover:text-black">
            <FaPlus className="w-4 h-4 mt-1 group-hover:text-black text-primary" />
            My List
        </button>
    </div>
</div>
  <div className='gap-4 flex '>
  <div className=' h-10 w-10 rounded-full hover:bg-primary border-rounded border-white border-2 group hover:border-primary'>
    <FaThumbsUp className='m-2 group-hover:text-black '/>
    </div>
    <div className=' h-10 w-10 rounded-full hover:bg-primary border-rounded border-white border-2 group hover:border-primary'>
    <FaThumbsDown className='m-2 group-hover:text-black'/>
    </div>
  </div>
  </div>
  
        </>
      ),
    },
    {
      id: 2,
      img: Images.Image_35,
      description: (
        <>
          <h1 className='text-5xl mb-2'>The Marvels</h1>
          <div className="flex gap-6 mb-6">
            <div className="flex gap-2">
          <span><Icon.StarIcon className='w-4 '/></span><span>6.374</span>
          </div>
          <span>2023</span><span>2h38m</span><span>Comedy</span><span>Drama</span><span>Advanture</span><span class=" text-primary bg-teritory border border-2 rounded-lg ">1080p</span>
          </div>
          <p className="text-start mb-2  mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/>esse quasi asperiores neque corrupti fuga in excepturi nulla quos autem alias animi unde illo officia <br/> Ex est cupiditate iusto unde illo officia suscipit voluptatibus nobis rem? .</p>
         <div className='gap-24 flex'>
         <div className="flex gap-6  ">
    <div className=" border border-2 rounded-lg  h-[40px]  w-[130px]  text-white  group hover:bg-primary hover:border-primary">
        <button className="transition-colors duration-300 group-hover:text-black p-2  flex  font-bold gap-2  hover:border-primary "> 
         <FaPlay className="text-primary mt-1 font-bold group-hover:text-black" />Play Movie</button>
    </div>
    <div className="border border-2 rounded-lg p-2 h-10 w-[100px] font-bold group hover:bg-primary hover:border-primary">
        <button className="flex gap-2 transition-colors duration-300 group-hover:text-black">
            <FaPlus className="w-4 h-4 mt-1 group-hover:text-black text-primary" />
            My List
        </button>
    </div>
</div>
  <div className='gap-4 flex '>
  <div className=' h-10 w-10 rounded-full hover:bg-primary border-rounded border-white border-2 group hover:border-primary'>
    <FaThumbsUp className='m-2 group-hover:text-black '/>
    </div>
    <div className=' h-10 w-10 rounded-full hover:bg-primary border-rounded border-white border-2 group hover:border-primary'>
    <FaThumbsDown className='m-2 group-hover:text-black'/>
    </div>
  </div>
  
  </div>
  
        </>
      ),
    },
    
    {
      id: 3,
      img: Images.Image_36,
      description: (
        <>
          <h1 className='text-5xl mb-2'>Rebel Moon</h1>
          <div className="flex gap-6 mb-6">
            <div className="flex gap-2">
          <span><Icon.StarIcon className='w-4 '/></span><span>6.374</span>
          </div>
          <span>2023</span><span>2h38m</span><span>Comedy</span><span>Drama</span><span>Advanture</span><span class=" text-primary bg-teritory border border-2 rounded-lg ">1080p</span>
          </div>
          <p className="text-start mb-2  mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/>esse quasi asperiores neque corrupti fuga in excepturi nulla quos autem alias animi unde illo officia <br/> Ex est cupiditate iusto unde illo officia suscipit voluptatibus nobis rem? .</p>
          <div className='gap-24 flex'>
          <div className="flex gap-6  ">
    <div className=" border border-2 rounded-lg  h-[40px]  w-[130px]  text-white  group hover:bg-primary hover:border-primary">
        <button className="transition-colors duration-300 group-hover:text-black p-2  flex  font-bold gap-2  hover:border-primary "> 
         <FaPlay className="text-primary mt-1 font-bold group-hover:text-black" />Play Movie</button>
    </div>
    <div className="border border-2 rounded-lg p-2 h-10 w-[100px] font-bold group hover:bg-primary hover:border-primary">
        <button className="flex gap-2 transition-colors duration-300 group-hover:text-black">
            <FaPlus className="w-4 h-4 mt-1 group-hover:text-black text-primary" />
            My List
        </button>
    </div>
</div>
  <div className='gap-4 flex '>
  <div className=' h-10 w-10 rounded-full hover:bg-primary border-rounded border-white border-2 group hover:border-primary'>
    <FaThumbsUp className='m-2 group-hover:text-black '/>
    </div>
    <div className=' h-10 w-10 rounded-full hover:bg-primary border-rounded border-white border-2 group hover:border-primary'>
    <FaThumbsDown className='m-2 group-hover:text-black'/>
    </div>
  </div>
  
  </div>
  
        </>
      ),
    },
    {
      id: 4,
     img:Images.Image_37,
     description: (
      <>
        <h1 className='text-5xl mb-2'>Hunger game</h1>
        <div className="flex gap-6 mb-6">
          <div className="flex gap-2">
        <span><Icon.StarIcon className='w-4 '/></span><span>6.374</span>
        </div>
        <span>2023</span><span>2h38m</span><span>Comedy</span><span>Drama</span><span>Advanture</span><span class=" text-primary bg-teritory border border-2 rounded-lg ">1080p</span>
        </div>
        <p className="text-start mb-2  mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/>esse quasi asperiores neque corrupti fuga in excepturi nulla quos autem alias animi unde illo officia <br/> Ex est cupiditate iusto unde illo officia suscipit voluptatibus nobis rem? .</p>
        <div className='gap-24 flex'>
        <div className="flex gap-6  ">
    <div className=" border border-2 rounded-lg  h-[40px]  w-[130px]  text-white  group hover:bg-primary hover:border-primary">
        <button className="transition-colors duration-300 group-hover:text-black p-2  flex  font-bold gap-2  hover:border-primary "> 
         <FaPlay className="text-primary mt-1 font-bold group-hover:text-black" />Play Movie</button>
    </div>
    <div className="border border-2 rounded-lg p-2 h-10 w-[100px] font-bold group hover:bg-primary hover:border-primary">
        <button className="flex gap-2 transition-colors duration-300 group-hover:text-black">
            <FaPlus className="w-4 h-4 mt-1 group-hover:text-black text-primary" />
            My List
        </button>
    </div>
</div>
  <div className='gap-4 flex '>
  <div className=' h-10 w-10 rounded-full hover:bg-primary border-rounded border-white border-2 group hover:border-primary'>
    <FaThumbsUp className='m-2 group-hover:text-black '/>
    </div>
    <div className=' h-10 w-10 rounded-full hover:bg-primary border-rounded border-white border-2 group hover:border-primary'>
    <FaThumbsDown className='m-2 group-hover:text-black'/>
    </div>
  </div>
  
  </div>

      </>
    ),
  },
  {
    id: 5,
    img: Images.Image_5,
    description: (
      <>
        <h1 className='text-5xl mb-2'>The color purple</h1>
        <div className="flex gap-6 mb-6">
          <div className="flex gap-2">
        <span><Icon.StarIcon className='w-4 '/></span><span>6.374</span>
        </div>
        <span>2023</span><span>2h38m</span><span>Comedy</span><span>Drama</span><span>Advanture</span><span class=" text-primary bg-teritory border border-2 rounded-lg ">1080p</span>
        </div>
        <p className="text-start mb-2  mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit esse quasi asperiores neque.<br/>esse quasi asperiores neque corrupti fuga in excepturi nulla quos autem alias animi unde illo officia <br/> Ex est cupiditate iusto unde illo officia suscipit voluptatibus nobis rem? .</p>
        <div className='gap-24 flex'>
        <div className="flex gap-6  ">
    <div className=" border border-2 rounded-lg  h-[40px]  w-[130px]  text-white  group hover:bg-primary hover:border-primary">
        <button className="transition-colors duration-300 group-hover:text-black p-2  flex  font-bold gap-2  hover:border-primary "> 
         <FaPlay className="text-primary mt-1 font-bold group-hover:text-black" />Play Movie</button>
    </div>
    <div className="border border-2 rounded-lg p-2 h-10 w-[100px] font-bold group hover:bg-primary hover:border-primary">
        <button className="flex gap-2 transition-colors duration-300 group-hover:text-black">
            <FaPlus className="w-4 h-4 mt-1 group-hover:text-black text-primary" />
            My List
        </button>
    </div>
</div>
  <div className='gap-4 flex '>
  <div className=' h-10 w-10 rounded-full hover:bg-primary border-rounded border-white border-2 group hover:border-primary'>
    <FaThumbsUp className='m-2 group-hover:text-black '/>
    </div>
    <div className=' h-10 w-10 rounded-full hover:bg-primary border-rounded border-white border-2 group hover:border-primary'>
    <FaThumbsDown className='m-2 group-hover:text-black'/>
    </div>
  </div>
  
  </div>
      </>
    ),
  },
  
  {
    id: 6,
    img: Images.Image_8,
    description: (
      <>
        <h1 className='text-5xl mb-2'>Napoleon</h1>
        <div className="flex gap-6 mb-6">
          <div className="flex gap-2">
        <span><Icon.StarIcon className='w-4 '/></span><span>6.374</span>
        </div>
        <span>2023</span><span>2h38m</span><span>Comedy</span><span>Drama</span><span>Advanture</span><span class=" text-primary bg-teritory border border-2 rounded-lg ">1080p</span>
        </div>
        <p className="text-start mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet.<br/>esse quasi asperiores neque corrupti fuga in excepturi nulla quos autem alias animi unde illo officia <br/> Ex est cupiditate iusto unde illo officia suscipit voluptatibus nobis rem? .</p>
       <div className='gap-24 flex'>
<div className="flex gap-6  ">
    <div className=" border border-2 rounded-lg  h-[40px]  w-[130px]  text-white  group hover:bg-primary hover:border-primary">
        <button className="transition-colors duration-300 group-hover:text-black p-2  flex  font-bold gap-2  hover:border-primary "> 
         <FaPlay className="text-primary mt-1 font-bold group-hover:text-black" />Play Movie</button>
    </div>
    <div className="border border-2 rounded-lg p-2 h-10 w-[100px] font-bold group hover:bg-primary">
        <button className="flex gap-2 transition-colors duration-300 group-hover:text-black">
            <FaPlus className="w-4 h-4 mt-1 group-hover:text-black text-primary" />
            My List
        </button>
    </div>
</div>



<div className='gap-4 flex '>
  <div className=' h-10 w-10 rounded-full hover:bg-primary border-rounded border-white border-2 group hover:border-primary'>
    <FaThumbsUp className='m-2 group-hover:text-black '/>
    </div>
    <div className=' h-10 w-10 rounded-full hover:bg-primary border-rounded border-white border-2 group hover:border-primary'>
    <FaThumbsDown className='m-2 group-hover:text-black'/>
    </div>
  </div>


</div> 

      </>
    ),
  },
 
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setVisibleIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleRightArrowClick = () => {
    setVisibleIndex((prevIndex) =>
      Math.min(prevIndex + 1, HomeData.length -4 ) 
    );
  };
  return (
    <div className=" bg-black  ">
      {selectedImageIndex !== null && (
        <div className=" w-full h-full flex items-center justify-center" onClick={() => setSelectedImageIndex(null)}>
          <div className="cursor-pointer border border-2 border-white relative">
            <img
              src={HomeData[selectedImageIndex].img}
              alt=""
              className="w-[1300px] h-[450px] opacity-15 "
            />
            <div className="text-white absolute top-40 ml-4">
              {HomeData[selectedImageIndex].description}
            </div>
          </div>
        </div>
      )}
      <div className='flex'>
       <Icon.AeroLeft className=' mt-20 text-white w-10 h-10' onClick={handleLeftArrowClick}/>
     
      <div className="flex pb-8 gap-10 pl-8 ">
        
      {HomeData.slice(visibleIndex, visibleIndex +4).map((item, index) => (
          <div key={index} className='relative group'>
           
            <div className="flex items-center justify-center cursor-pointer border-primary relative ">
              <div  className='top-0 text-white h-10 w-10 absolute hidden group-hover:block '>
            <AiOutlineUp/>
            </div>
              <img
                src={item.img}
                alt=""
                className="w-[400px] h-[150px] cursor-pointer transform transition-transform  border-2 border-primary pt-4 pb-4 "
                onClick={() => handleImageClick(index)}
              />
            </div>
           
          </div>
        ))}
      
      </div>
      <Icon.AeroRight className=' mt-20 text-white w-20 h-10 ml-4 ' onClick={handleRightArrowClick}/>
      </div>

    </div>


  );
};

export default Homepage;


