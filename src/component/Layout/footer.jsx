import React from 'react'
import *as Icons from "../../assest/icon";
// import *as Images from "../../assest/images";
const footer = () => {
  return (
    <div className="bg-black p-4 text-center text-white">

       
     <p>copiright@ 2023 Nites TV.All Rights Reserved</p>
     <p>watch FREE Movies Online in HD</p>
     
     <div className="flex ml-[600px] mt-2">
     <Icons.InstagramIcon />
     <Icons.TwitterIcon/>
     </div>
    </div>
  )
}

export default footer
