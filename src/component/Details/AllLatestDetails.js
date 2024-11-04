

import React from 'react';
 import { useParams } from 'react-router-dom';
 import * as Images from "../../assest/images";
 import * as Icon from "../../assest/icon";
import { Link } from 'react-router-dom';
 const  LatestData = [
  {
    id: 1,
    img: Images.Image_19,
    name: "FLAMES",
    description:(
<>
<div className=''>
  <div className='gap-4 flex mb-4 '>
    <Icon.StarIcon/>
    <span>7.4/10 of 12418</span><span>2018</span><span>28min</span><span>comedy Drama</span><span className='border border-2 text-primary  rounded-lg h-6'>1080</span><span>Added:4Seasons-20 Episodes</span>
  </div>
  <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
  <div className='grid grid-cols-1'>
  <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
  <span > Cast:  Deepesh Suumitra Jagdish</span>
 
  </div>
</div>

</>
    ),
  },
  {
    id:2,
    img:Images.Image_20,
    name:"Ricky and Morey",
    description:(
      <>
      <div className=''>
        <div className='gap-4 flex mb-4 '>
          <Icon.StarIcon/>
          <span>7.4/10 of 12418</span><span>2018</span><span>28min</span><span>comedy Drama</span><span className='border border-2 text-primary  rounded-lg h-6'>1080</span><span>Added:4Seasons-20 Episodes</span>
        </div>
        <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
        <div className='grid grid-cols-1'>
        <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
        <span > Cast:  Deepesh Suumitra Jagdish</span>
       
        </div>
      </div>
      
      </>
          ),
    },
        {
    id:3,
    img:Images.Image_21,
    name:"Invisible",
    description:(
      <>
      <div className=''>
        <div className='gap-4 flex mb-4 '>
          <Icon.StarIcon/>
          <span>7.4/10 of 12418</span><span>2018</span><span>28min</span><span>comedy Drama</span><span className='border border-2 text-primary  rounded-lg h-6'>1080</span><span>Added:4Seasons-20 Episodes</span>
        </div>
        <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
        <div className='grid grid-cols-1'>
        <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
        <span > Cast:  Deepesh Suumitra Jagdish</span>
       
        </div>
      </div>
      
      </>
          ),
    },
    {
    id:4,
    img:Images.Image_22,
    name:"Reacher",
    description:(
      <>
      <div className=''>
        <div className='gap-4 flex mb-4 '>
          <Icon.StarIcon/>
          <span>7.4/10 of 12418</span><span>2018</span><span>28min</span><span>comedy Drama</span><span className='border border-2 text-primary  rounded-lg h-6'>1080</span><span>Added:4Seasons-20 Episodes</span>
        </div>
        <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
        <div className='grid grid-cols-1'>
        <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
        <span > Cast:  Deepesh Suumitra Jagdish</span>
       
        </div>
      </div>
      
      </>
          ),
    },
    {
    id:5,
    img:Images.Image_23,
    name:"Games of Throns",
    description:(
      <>
      <div className=''>
        <div className='gap-4 flex mb-4 '>
          <Icon.StarIcon/>
          <span>7.4/10 of 12418</span><span>2018</span><span>28min</span><span>comedy Drama</span><span className='border border-2 text-primary  rounded-lg h-6'>1080</span><span>Added:4Seasons-20 Episodes</span>
        </div>
        <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
        <div className='grid grid-cols-1'>
        <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
        <span > Cast:  Deepesh Suumitra Jagdish</span>
       
        </div>
      </div>
      
      </>
          ),
    },
    {
    id:6,
    img:Images.Image_24,
    name:"Monarch:Legacy of Monsters",
    description:(
      <>
      <div className=''>
        <div className='gap-4 flex mb-4 '>
          <Icon.StarIcon/>
          <span>7.4/10 of 12418</span><span>2018</span><span>28min</span><span>comedy Drama</span><span className='border border-2 text-primary  rounded-lg h-6'>1080</span><span>Added:4Seasons-20 Episodes</span>
        </div>
        <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
        <div className='grid grid-cols-1'>
        <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
        <span > Cast:  Deepesh Suumitra Jagdish</span>
       
        </div>
      </div>
      
      </>
          ),
     },
     {
     id:7,
     img:Images.Image_25,
     name:"Percy Jakson",
     description:(
      <>
      <div className=''>
        <div className='gap-4 flex mb-4 '>
          <Icon.StarIcon/>
          <span>7.4/10 of 12418</span><span>2018</span><span>28min</span><span>comedy Drama</span><span className='border border-2 text-primary  rounded-lg h-6'>1080</span><span>Added:4Seasons-20 Episodes</span>
        </div>
        <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
        <div className='grid grid-cols-1'>
        <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
        <span > Cast:  Deepesh Suumitra Jagdish</span>
       
        </div>
      </div>
      
      </>
          ),
     },
    {
    id:8,
    img:Images.Image_26,
    name:"Loki",
     description:(
      <>
      <div className=''>
        <div className='gap-4 flex mb-4 '>
          <Icon.StarIcon/>
          <span>7.4/10 of 12418</span><span>2018</span><span>28min</span><span>comedy Drama</span><span className='border border-2 text-primary  rounded-lg h-6'>1080</span><span>Added:4Seasons-20 Episodes</span>
        </div>
        <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
        <div className='grid grid-cols-1'>
        <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
        <span > Cast:  Deepesh Suumitra Jagdish</span>
       
        </div>
      </div>
      
      </>
          ),
    },
    {
      id:9,
      img:Images.Image_27,
      name:"The last of us",
      year:2023,
      description:(
        <>
        <div className=''>
          <div className='gap-4 flex mb-4 '>
            <Icon.StarIcon/>
            <span>7.4/10 of 12418</span><span>2018</span><span>28min</span><span>comedy Drama</span><span className='border border-2 text-primary  rounded-lg h-6'>1080</span><span>Added:4Seasons-20 Episodes</span>
          </div>
          <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
          <div className='grid grid-cols-1'>
          <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
          <span > Cast:  Deepesh Suumitra Jagdish</span>
         
          </div>
        </div>
        
        </>
            ),
   
      },
          {
      id:10,
      img:Images.Image_28,
      name:"Yong sheldon",
      year:2023,
      description:(
        <>
        <div className=''>
          <div className='gap-4 flex mb-4 '>
            <Icon.StarIcon/>
            <span>7.4/10 of 12418</span><span>2018</span><span>28min</span><span>comedy Drama</span><span className='border border-2 text-primary  rounded-lg h-6'>1080</span><span>Added:4Seasons-20 Episodes</span>
          </div>
          <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
          <div className='grid grid-cols-1'>
          <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
          <span > Cast:  Deepesh Suumitra Jagdish</span>
         
          </div>
        </div>
        
        </>
            ),
      },
      {
      id:11,
      img:Images.Image_29,
      name:"Succession the Complete series",
      year:2023,
      description:(
        <>
        <div className=''>
          <div className='gap-4 flex mb-4 '>
            <Icon.StarIcon/>
            <span>7.4/10 of 12418</span><span>2018</span><span>28min</span><span>comedy Drama</span><span className='border border-2 text-primary  rounded-lg h-6'>1080</span><span>Added:4Seasons-20 Episodes</span>
          </div>
          <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
          <div className='grid grid-cols-1'>
          <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
          <span > Cast:  Deepesh Suumitra Jagdish</span>
         
          </div>
        </div>
        
        </>
            ),
      },
      {
      id:12,
      img:Images.Image_30,
      name:"Breaking Bad",
      year:2023,
      description:(
        <>
        <div className=''>
          <div className='gap-4 flex mb-4 '>
            <Icon.StarIcon/>
            <span>7.4/10 of 12418</span><span>2018</span><span>28min</span><span>comedy Drama</span><span className='border border-2 text-primary  rounded-lg h-6'>1080</span><span>Added:4Seasons-20 Episodes</span>
          </div>
          <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
          <div className='grid grid-cols-1'>
          <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
          <span > Cast:  Deepesh Suumitra Jagdish</span>
         
          </div>
        </div>
        
        </>
            ),
      },
      
];


const AllLatestDetail = () => {
  
  const { id } = useParams();

 
  const selectedItem =  LatestData.find(item => item.id === parseInt(id));

  if (!selectedItem) {
   
    return <div>Item not found</div>;
  }

  return (
    <div className='bg-black mt-8 '>
      <div className='flex gap-4 text-white '>
      <ul className='flex gap-4'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/allpopular"> <li>TvShows</li></Link>
      </ul>
      <span>{selectedItem.name}</span>
      </div>
    <div className=" text-white flex">
      <div>
         <img src={selectedItem.img} alt={selectedItem.name} className="w-60 h-120 rounded-lg border border-black-2 my-4 mx-auto"/>
         </div>
         <div className='mt-4 ml-6 '>
        <div className="text-xl font-bold text-white text-center mb-4 text-start mb-4">{selectedItem.name}</div>
         <div className="font-bold text-white text-center mb-4 text-start mb-4"> {selectedItem.description}</div>
      </div>
    </div>
    </div>
  );
}

export default AllLatestDetail;

