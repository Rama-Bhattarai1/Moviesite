import React from 'react'
import { Button } from '../shared/Button'
import { Link } from 'react-router-dom'
import* as Images from'../../assest/images';
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
const homepage = () => {
  return (
    
    <div class=" relative">
       <div className='relative  '>
        <div className='bg-black w-[1270px]'>
        <img src={Images.Image_39} alt="" className='w-[1270px] opacity-15 '/>
        </div>
            <div class="flex gap-4 justify-center top-20 absolute container">
      <Link to="/"><Button
        title="Home"
        onClick={() => alert("Home")}
        variant="danger"
      /></Link>
      <Link to="/allmovie"><Button
        title="Movies"
        onClick={() => alert("Movies")}
        variant="danger"
      /></Link>
            <Link to="/allpopular"><Button
        title="Popular"
        onClick={() => alert("Popular")}
        variant="danger"
        
      /></Link>
        <Link to="/alllatest"><Button
        title="TV Shows"
        onClick={() => alert("TV Shows")}
        variant="danger"
      /></Link>
      </div>
      </div>
      <div className='absolute top-40 justify-center'>
      <div className='border-2 rounded-lg border-gray w-20 h-20'>
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
    
  
      <div className='ml-40 absolute  top-80 text-white border border-2 border-white rounded-lg p-2 w-[900px] h-[500px]'>
        <h1 className='font-bold text-2xl'>BFlix | Watch Movies and Shows Online for Free</h1>
        <p className=''>
          
          A wide selection of free online movies and TV shows are available on BFlix. You can watch movies and TV shows online for free without registration in full HD. Bflix function as a streaming platform, providing users with access to a wide range of movies and TV shows available for free. BFlix has some important features:
Web-Based Platform: BFlix was accessible through a web browser, eliminating the need for downloading a specific application. You can simply visit the website and start streaming whatever you want. The site is reponsive so it adapts on any device.
Huge Content: We offer a vast collection of Movies and TV Shows, with various genres and languages. This wide selection was one of our main attractions.
Simply Streaming: Once you select a title, BFlix stream the content directly to your device. We have powerful servers to do the process simple and very fast.
User Interface: Nites TV featured an easy-to-navigate interface. You can browse through different categories, search for specific titles, actors, or choose from featured content.
Free Access: All our content offerd is totally for free, which set it apart from subscription-based streaming services.
No Account Requirement: Nites.TV not require users to create an account or log in, offering immediate access to its library. But we offer a register option to allow users to create lists, bookmark their favorite titles and watch it later.
Ads-Free: BFlix at difference of other streaming websites, its totally ads free. Our most important goal is offering users the best streaming experience. We'll try other methods to generate revenue like donations.
High Quality: All our content is available always in 1080p and even most relevant titles are in 4K.
If you are interested in know more about other movie site options, we recommend you to visit the list with the best free movie streaming websites.</p>
      </div>
    </div>
  )
}

export default homepage
