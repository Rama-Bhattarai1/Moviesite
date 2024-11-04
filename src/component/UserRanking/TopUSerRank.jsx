import React from 'react'
import * as Images from "../../assest/images";
import * as Icon from "../../assest/icon";
import { FaStar } from "react-icons/fa";
import {  Circle } from 'rc-progress';
const UserRank=[
    {
        id:1,
        img:Images.Image_4,
        name:"Five Night at Freeddy's",
        year:2023,
        rating:(
          <>
          <div className='flex gap-2'>
      <div className='h-14 w-14 relative'>
      <Circle percent={80} strokeWidth={8} trailWidth={6}strokeColor="#22d3ee" trailColor='black'/> 
      <p className='absolute top-4 left-4 font-bold text-white'>80</p>
      </div>
      <div className='flex gap-2'>
     <FaStar className='text-primary'/>
     <FaStar className='text-primary'/>
     <FaStar className='text-primary'/>
     <FaStar className='text-primary'/>
     <FaStar className='text-teritory'/>
      </div>
    </div>
          </>
        )
    },
    {
        id:2,
        img:Images.Image_3,
        name:"Taylor Swiftt:The Eras Tour",
        year:2023,
        rating:(
          <>
          <div className='flex gap-2'>
      <div className='h-14 w-14 relative'>
      <Circle percent={70} strokeWidth={8} trailWidth={6}strokeColor="#22d3ee" trailColor='black'/> 
      <p className='absolute top-4 left-4 font-bold text-white'>70</p>
      </div>
      <div className='flex gap-2'>
     <FaStar className='text-primary'/>
     <FaStar className='text-primary'/>
     <FaStar className='text-primary'/>
     <FaStar className='text-primary'/>
     <FaStar className='text-teritory'/>
      </div>
    </div>
          </>
        )
    },
    {
        id:3,
        img:Images.Image_2,
        name:"Fifty Shades of Gray",
        year:2023,
        rating:(
          <>
          <div className='flex gap-2'>
      <div className='h-14 w-14 relative'>
      <Circle percent={67} strokeWidth={8} trailWidth={6}strokeColor="#22d3ee" trailColor='black'/> 
      <p className='absolute top-4 left-4 font-bold text-white'>67</p>
      </div>
      <div className='flex gap-2'>
     <FaStar className='text-primary'/>
     <FaStar className='text-primary'/>
     <FaStar className='text-primary'/>
     <FaStar className='text-primary'/>
     <FaStar className='text-teritory'/>
      </div>
    </div>
          </>
        )
    },
]
const TopUSerRank = () => {
  return (
    <div>
      <div>
<h1 className='flex text-xl font-bold text-white  border-b-teritory mb-8 mt-20'>Top User Rank<Icon.DoubleRight className="w-4 mt-1"/></h1>
<div>
{UserRank.map((item,index)=>(
    <div class=" flex">
   <div key={index} >
   <div className="relative group">
  <img src={item.img} alt="" class="w-[100px] h-[100px] rounded-lg border border-teritory mb-4 overflow-hidden transition transform hover:scale-95"/>
  <p className="border border-2-black w-10 rounded-lg text-center text-primary bg-black absolute top-2 ml-14 p-1 font-bold text-[10px] p-1opacity-100 group-hover:opacity-0">
              1080p
            </p>
            </div>
  </div>
  <div class="ml-4">
  <div class="font-bold text-white hover:text-primary ">{item.name}</div>
  <div class=" font-bold text-white hover:text-teritory ">{item.year}</div> 
  <div>{item.rating}</div>
  </div>
   </div> 
))}
  </div>
</div>
    </div>
  )
}

export default TopUSerRank
