import React from 'react'
import * as Icon from "../../assest/icon";
import * as Image from "../../assest/images";
const footersecond = () => {
  return (
    <div>
        <div >
          
          <div className="flex bg-secondary p-6 justify-between">
          <img src={Image.Image_1} alt="" class=" rounded-full w-20 h-10"/>
            <p className="text-teritory ml-80">All other websites with similar domains or design are unrelated to nites.js</p>
            <div className="flex mt-2">
            <Icon.TwitterIcon class="text-teritory w-10 h-5 hover:text-primary "/>
            <Icon.InstagramIcon class="text-teritory w-10 h-5 hover:text-primary "/>
            </div>
        </div> 
       
        <div className="flex gap-4 justify-center bg-teritory relative p-6 text-white">
<span>T.O.S</span>
<span>BFlix App</span>
<span>sitemap</span>
</div>
        </div>
      
    </div>
  )
}

export default footersecond
