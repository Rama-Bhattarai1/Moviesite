import React from 'react'
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
const homepage1 = () => {
  return (
    <div className=''>
      <div className='border-2 rounded-lg border-gray'>
      </div>
        <div className='flex gap-4 justify-center'>
        <div className='flex bg-orange-600 text-white gap-4 rounded-lg  w-[120px] p-2 justify-center'>
                <FaRedditAlien className='mt-1'/>
                <button className='' >share</button>
            </div>
        <div className='flex bg-blue-900 text-white gap-4 rounded-lg  w-[120px] p-2 justify-center'>
                <FaFacebookF className='mt-1'/>
                <button >share</button>
            </div>
            <div className='flex bg-lime-400 text-white gap-4  rounded-lg  w-[120px] p-2 justify-center'>
                <FaShareAlt className='mt-1'/>
                <button >share</button>
            </div>
            <div className='flex bg-blue-400 text-white gap-4  rounded-lg  w-[120px] p-2 justify-center'>
                <FaFacebookMessenger className='mt-1'/>
                <button >share</button>
            </div>
            <div className='flex bg-green text-white gap-4  rounded-lg  w-[120px] p-2 justify-center'>
                <FaWhatsapp className='mt-1'/>
                <button >share</button>
            </div>
            <div className='flex bg-blue-600 text-white gap-4  rounded-lg p w-[120px] p-2 justify-center'>
                <FaTelegramPlane className='mt-1'/>
                <button >share</button>
            </div>

</div>
      </div>
    
  )
}

export default homepage1
