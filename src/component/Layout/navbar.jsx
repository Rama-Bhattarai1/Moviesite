

import React, { useState } from 'react';
import * as Icons from "../../assest/icon";
import * as Images from "../../assest/images";
import Sidebar from '../sidebar/sidebar';
import { Link,useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const[searchTerm,setSearchTerm] = useState("")

  const handleMenuClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleMenuDoubleClick = () => {
    setSidebarVisible(false);
  };
  
 const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted!', searchTerm);
  navigate(`/search/${searchTerm}`);
}
 
  return (
    <>
   
<div className={`${location.pathname === '/' ? '' : 'bg-ston'} flex absolute top-0 z-10 w-full`}>
        <div className="flex mt-4 ml-4">
        
           <div onClick={handleMenuClick} onDoubleClick={handleMenuDoubleClick}>

             <div className='relative'><Icons.MenuIcon className="h-10 w-10 cursor-pointer text-white" />{sidebarVisible && <Sidebar  setSidebarVisible={setSidebarVisible}/>}</div>
            
           </div>
        
          <Link to="/"> <img src={Images.Image_1} alt="" className="rounded-full w-20 h-10" /></Link>
        
         </div>
         <form onSubmit={handleSubmit}>
  <div className="flex ml-[400px] rounded-4xl h-10 w-60 gap-4 text-center relative  mt-4">
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      type="text"
      placeholder="search your product"
      className="w-80 rounded-full pl-10 bg-gray-500 text-white"
    />
    {/* <button type="submit"> */}
      <Icons.SearchIcon className="absolute top-0 ml-2 w-4 mt-2 text-white" />
    {/* </button> */}
  </div>
</form>
         <div className="gap-4 p-2 mt-2 ml-[340px]">
         <Link to="/login"><button className="text-white hover:text-primary">Login</button></Link>
          
         <Link to="/signup">
  <button className="text-white border border-white border-2 rounded-lg ml-2 hover:bg-primary hover:text-black p-2">
    Signup
  </button>
</Link>

         </div>
       </div>
    
      
    </>
  );
}

export default Navbar;



