import React from 'react'
import { FaStar } from "react-icons/fa";
import {  Circle } from 'rc-progress';
const Rating = () => {
  return (
    <div className='flex gap-2'>
      <div className='h-14 w-14 relative'>
      <Circle percent={80} strokeWidth={8} trailWidth={6}strokeColor="#22d3ee" trailColor='black'/> 
      <p className='absolute top-4 left-4 font-bold'>89</p>
      </div>
      <div className='flex gap-2'>
     <FaStar className='text-primary'/>
     <FaStar className='text-primary'/>
     <FaStar className='text-primary'/>
     <FaStar className='text-primary'/>
     <FaStar className='text-teritory'/>
      </div>
    </div>
  )
}

export default Rating
